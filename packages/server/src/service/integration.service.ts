import { Injectable } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bull'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Queue } from 'bull'

import { IntegrationModel, IntegrationStatusEnum } from '@model'

import { AppService } from './app.service'

@Injectable()
export class IntegrationService {
  constructor(
    @InjectModel(IntegrationModel.name)
    private readonly integrationModel: Model<IntegrationModel>,
    private readonly appService: AppService,
    @InjectQueue('IntegrationEmailQueue') private readonly emailQueue: Queue,
    @InjectQueue('IntegrationWebhookQueue') private readonly webhookQueue: Queue
  ) {}

  async findById(id: string): Promise<IntegrationModel | null> {
    return this.integrationModel.findById(id)
  }

  async findAllInForm(formId: string): Promise<IntegrationModel[]> {
    return this.integrationModel.find({ formId })
  }

  async findAllInFormByApps(formId: string, appIds: string[]): Promise<IntegrationModel[]> {
    return this.integrationModel.find({
      formId,
      appId: {
        $in: appIds
      }
    })
  }

  async findOne(formId: string, appId: string): Promise<IntegrationModel | null> {
    return this.integrationModel.findOne({
      formId,
      appId
    })
  }

  async create(integration: IntegrationModel | any): Promise<string | undefined> {
    const result = await this.integrationModel.create(integration as any)
    return result.id
  }

  async update(id: string, updates: Record<string, any>): Promise<any> {
    const result = await this.integrationModel.updateOne(
      {
        _id: id
      },
      updates
    )
    return !!result?.ok
  }

  async updateAllBy(conditions: Record<string, any>, updates: Record<string, any>): Promise<any> {
    const result = await this.integrationModel.updateMany(conditions, updates)
    return result?.n > 0
  }

  async createOrUpdate(
    formId: string,
    appId: string,
    updates: Record<string, any>
  ): Promise<string> {
    const integration = await this.findOne(formId, appId)

    if (integration) {
      await this.update(integration.id, updates)
      return integration.id
    }

    return this.create({
      formId,
      appId,
      ...updates
    })
  }

  public async delete(formId: string, appId: string): Promise<boolean> {
    const result = await this.integrationModel.deleteOne({
      formId,
      appId
    })
    return result?.n > 0
  }

  public async addQueue(formId: string, submissionId: string): Promise<void> {
    const integrations = await this.integrationModel.find({
      formId,
      status: IntegrationStatusEnum.ACTIVE
    })

    for (const integration of integrations) {
      const app = await this.appService.findById(integration.appId)

      if (!app) {
        continue
      }

      const data = {
        integrationId: integration.id,
        submissionId
      }

      switch (app.uniqueId) {
        case 'email':
          this.emailQueue.add(data)
          break

        case 'webhook':
          this.webhookQueue.add(data)
          break
      }
    }
  }
}
