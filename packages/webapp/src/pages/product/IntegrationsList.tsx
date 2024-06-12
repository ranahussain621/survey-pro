import { observer } from 'mobx-react-lite'
import React from 'react'
import './product.css'

const IntegrationsList = observer(() => {
    return (
        <>
            <div className="productIntegration bg-slate-100 py-32">
                <div className="container-services">
                    <h3 className="text-5xl font-bold text-slate-950 text-left">Connect the dots</h3>
                    <p className="mt-4 text-lg text-slate-700 text-left">
                        Elevate your workflow with seamless integration of the tools you use every day.
                        <a href="/integrations" className="text-slate-900 text-base underline">
                            Check out all the integrations</a>
                    </p>
                    <div className="grid justify-items-center grid-cols-6 gap-4 my-12"><div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                        <a className="text-slate-900 text-center" href="/integrations/legacyslack">
                            <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/slack.svg" />
                            <h4 className="mt-4 font-medium">Slack</h4>
                        </a>
                    </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/airtable">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/airtable.svg" />
                                <h4 className="mt-4 font-medium">Airtable</h4></a></div><div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/zapier">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/zapier.svg" />
                                <h4 className="mt-4 font-medium">Zapier</h4>
                            </a>
                        </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/wordpress">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/wordpress.svg" />
                                <h4 className="mt-4 font-medium">WordPress</h4>
                            </a>
                        </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/wordpress">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/hubspot.svg" />
                                <h4 className="mt-4 font-medium">HubSpot</h4></a></div><div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/dropbox">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/dropbox.svg" />
                                <h4 className="mt-4 font-medium">Dropbox</h4>
                            </a>
                        </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/mailchimp">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/mailchimp.svg" />
                                <h4 className="mt-4 font-medium">Mailchimp</h4>
                            </a>
                        </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/monday">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/monday.svg" />
                                <h4 className="mt-4 font-medium">Monday</h4>
                            </a>
                        </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/telegram">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/telegram.svg" />
                                <h4 className="mt-4 font-medium">Telegram</h4>
                            </a>
                        </div><div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/googledrive">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/google-drive.svg" />
                                <h4 className="mt-4 font-medium">Google Drive</h4>
                            </a>
                        </div>
                        <div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/googleanalytics">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/google-analytics.svg" />
                                <h4 className="mt-4 font-medium">Google Analytics</h4>
                            </a></div><div className="sc-bgqQcB gocjor hey-flex integrations__Item-sc-1asq0yo-0 kxfvbF mt-12">
                            <a className="text-slate-900 text-center" href="/integrations/lark">
                                <img className="w-16 h-16 mx-auto" src="https://forms.b-cdn.net/website/integrations/lark.png" />
                                <h4 className="mt-4 font-medium">Lark Suite</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default IntegrationsList

