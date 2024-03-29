# Lazy-To-Send-Emails

Tired of sending the same emails constantly with just a few changes in the content / recipient, I decided it's time to write a script to automate the process

Users are simply required to provide their domain, email address, password, subject and content on the web application! Users will also have to provide a data file that contains the various variables for the different emails to be sent out, with these variables being marked in curly braces in the subject and content! If the application can successfully log in with the given credentials, the script can send out these emails automatically!

## Testing of script

The script was tested using the recipients.csv in which various combinations as described by the remarks column was used to test the different use cases!

For the first 3 test cases, the script should send out the emails as they have at least one recipient although in the various patterns! As for the 4th test case without a recipient, the script would include it in a failure.csv file which is used to contain all rows that have failed!

## Authentication error even with the correct username and password?

For certain domains such as Gmail, it is set by default to not allow python scripts to send out emails remotely and so users have to allow for 'less secure apps' for the script to function!

## Major Update - Frontned

To allow the application to be more useful to users, a simple frontend was created to allow users to enter their email details, select their domain as well as craft the email they want to send! Users can use curly braces to indicate the variables in the email and supplement it with a file containing the variable combinations in order for the email to be sent out with the customised details! You can refer to the snapshots below to see how the frontend looks like!

With the frontend, users can easily input the required information which is then passed to the flask server for the emails to be sent out!

## Old Files

Initial Jupyter - This jupyter notebook file contains the code that I written initially and it was tested and it worked! However, further automation and modularization of the code was done after this stage so the updated code can be found in the python script in the main directory!

Intial Script - This python script contains the code that I written initially and it was tested and it worked! However, further automation and modularization of the code was done after this stage so the updated code can be found in the python script in the main directory!

## Snapshots

![Frontend Image](/Snapshots/Frontend.PNG)

![Received Emails](/Snapshots/Received-Emails.PNG)

![Sent Emails](/Snapshots/Sent-Emails.PNG)
