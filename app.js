
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
        if (answer.type === 'basic-flash-card') {
            inquirer.prompt([{
                name: 'front',
                message: 'What is the question?',
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
               newCloze.cloze();
               newCloze.fullText();
               newCloze.partial();
			
                
            });
        }
    });


