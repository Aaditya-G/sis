import * as type from '../types';

export async function help(app:type.app) {
    app.message(/^sis help$/ , async ({message,say} : type.appMsg) => {
        await say({
            blocks: [
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "*Here's a list of commands*"
                    }
                },
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "`sis add user name [name] email [email]` - _add a new user to the database_"
                    }
                },
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "`sis info [name]` - _displays information for a particular user_ "
                    }
                },
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "`hello sis` - _greets the user_ "
                    }
                },
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "`sis help` - _displays the list of available commands_ "
                    }
                },
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "`sis ping` - _pong_ "
                    }
                },
                {
                    type: 'section',
                    text: { 
                        type: 'mrkdwn',
                        text: "`sis echo [message]` - _returns user's message_ "
                    }
                }
            ]
        })
    })
}