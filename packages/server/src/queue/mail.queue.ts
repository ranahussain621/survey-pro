import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'

import { SmtpOptionsFactory } from '@config'
import { SmtpMessage, SmtpOptions, smtpSendMail } from '@utils'

import { BaseQueue } from './base.queue'

export interface MailQueueJob {
  data: SmtpMessage
}

@Processor('MailQueue')
export class MailQueue extends BaseQueue {
  private readonly options!: SmtpOptions;

  constructor() {
    super();
    this.options = SmtpOptionsFactory();
    console.log('SMTP Options:', this.options); // Log options to verify
  }

  @Process()
  async sendMail(job: Job<MailQueueJob>) {
    try {
      console.log('Sending email:', job.data.data);
      const result = await smtpSendMail(this.options, job.data.data);
      console.log('Email sent successfully, Message ID:', result);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // Ensure error is propagated
    }
  }
}
