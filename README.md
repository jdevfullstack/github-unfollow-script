# GitHub Unfollow Script
Automate unfollow script for those who you are following but not following back on GitHub !

## Run With GitHub Codespaces
you can even simply do this on GitHub Codespaces

To run the script in GitHub Codespaces:

1. Open your repository in GitHub Codespaces.
2. Create a new file `unfollow.js`, and paste the JavaScript code into this file.
3. Open a terminal in Codespaces (View > Terminal).
4. In the terminal, run `npm install @octokit/rest` to install the Octokit library.
5. Run the script with `node unfollow.js`.

Remember to replace `'your_username'` and `'your_token_with_correct_permission'` in the script 
with your actual GitHub username and personal access token.

I tested it in one run, up to 4K it can scan 
but will take few minutes, so better be sure you have stable connection
and I did not hit the rate limit that time. Enjoy !
