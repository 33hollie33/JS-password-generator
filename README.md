# JS-password-generator

# Challenges within this course

The main task was to generate a password that enabled employees to have a criteria that they create themselves. The user wanted have access to senistive data using a safe and random generated password with the criteria that they have asked for themselves. When the user wants to change their password they are presented woth a series of prompts for a password criteria. This highlights the interactivity that Javascript provides for users. 

This challenge presented with HTML and CSS which was completed. Therefore no changes were made to the orignal HTML and CSS. There was minimal Javascript code provided. Therefore, there is no comments made to the CSS and HTML, just comments to the Javascript to guide other developers on how the task was completed and the though process behind it. In the Javascript code,the code that was had been provided has been highlighted within the comments. 

The password has certain criterias in which the user could choose for example: uppercase and lowercase letters, numbers and special characters. I used the oswap tool to guide in which special chracters should be included within the criteria. Link attached here: https://www.owasp.org/index.php/Password_special_characters. In addition to this, the other criteria for the generated password were the length of password should have a minimum of 8 characters and no more than 128 characters. Once the user has chosen a criteria, they click an application 'Generate Password'. This is when they should be presented with a password that fits the criteria they have requested. 

Issues within the Javascript and how it was solved:
1. To prompt the user on the specific characters, firstly the task was to break down what questions to use. The amount of chracters is the first question for the user to decide on. This was created by using a 'let' statement and an 'if' statement. Next, the 'let' statement was used for the user to decide if they wanted uppercase, lowecase, numbers or special characters within their passwords by using the 'let' statement and the window.confirm statement. A window.alert statement was used if the user did not confirm 'OK', to enable the user to create a safe password. The statement console.log was added afterwards. 

2. Variables were created for the password. Variables can store primitaive data types. For this, I specifically used a string variable as it can store numbers and letters of data. The variable consisted of: uppercase, lowercase, numbers and special characters. I completed this by using the 'const' statement. 

3. To enable the password to be generated a function statement was created to enable the password to be generated. The function statement within Javascript enables the piece of code that has been written to be re-used over and over again. It also improves code readability for other developers. This keeps the code clean and conscise and easier to read for other developers. The console.log statememnt was added after the function to output a message to the web console. 

5. A for loop was used within this code, to enable the user to have access to all the different possible numbers, special chracters, uppercase and lowercase letters. By using a for loop, it enables the web to use the piece of code over and over again. Within the loop, the statement console.log was added to enable access to the stored variable.

6. After the for loop was created, validator code was encorporated to ensure correct user output. 

Please refer to the image below of the finished password generator:
![Screenshot of generator](/Develop/images/passwordgeneratorimage.png)

Please refer to the link down below:
https://33hollie33.github.io/JS-password-generator/








