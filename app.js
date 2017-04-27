
var BasicCard = require('./basic.js');
var ClozeCard = require('./cloze.js');
var inquirer = require('inquirer');

 inquirer.prompt([{
        name: 'type',
        message: 'What kind of flashcard would you like to create?',
        type: 'list',
        choices: [{
            name: 'basic-flash-card'
        }, {
            name: 'cloze-flash-card'
        }]
    }]).then(function(answer) {
        // so this totally works, but it might be nice to break out the prompts for basic and cloze flash cards into their own separate functions
        if (answer.type === 'basic-flash-card') {
            inquirer.prompt([{
                name: 'front',
                message: 'What is the question?',
                // You do more or less the same validation for all of these questions, it'd be nice to refactor 
                // these validations to all use the same function. That could look something like:
                // function validateInputPresence (promptMessage, input) {
                //     if (input === '') {
                //         console.log(promptMessage)
                //         return false
                //     }
                //     return true
                // }
                // and then you could bind that function with the necessary prompt message and voila!
                // validate: validateInputPresence.bind(this, 'Please provide a question')
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide a question');
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: 'back',
                message: 'What is the answer?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide an answer');
                        return false;
                    } else {
                        return true;
                    }
                }
            }]).then(function(answer) {
                // I know it seems silly to concern yourself with keeping indentation consistent, but the visual clarity it adds is well worth it in my experience
                var newBasicCard = new BasicCard(answer.front, answer.back);
                newBasicCard.printfront();
                newBasicCard.printback();
           
            });
        } else if (answer.type === 'cloze-flash-card') {
            inquirer.prompt([{
                name: 'text',
                message: 'What is the full text?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide the full text');
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: 'cloze',
                message: 'What is the cloze portion?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide the cloze portion');
                        return false;
                    } else {
                        return true;
                    }
                }
            }]).then(function(answer) {
                var text = answer.text;
                var cloze = answer.cloze;
                var newCloze = new ClozeCard(text, cloze);
                newCloze.printCloze();
                newCloze.printFullText();
                newCloze.printPartial();
			
                
            });
        }
    });


