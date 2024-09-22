# GitHub Unfollow Script
auto unfollow script for those you follow but not following back on GitHub !

## Run With GitHub Codespaces
you can even simply do this on GitHub Codespaces

To run the script in GitHub Codespaces:

1. (optional) Fork the repository to your own GitHub account.
2. Open a GitHub Codespace:
   - If you forked the repository, open your forked repository in
     GitHub Codespaces.
   - If you did not fork the repository, open any repository to create
     a GitHub Codespace.
3. If you forked the repository:
   - The `unfollow.js` file should already exist.
   - If you did not fork the repository, create a new file named
     `unfollow.js` and paste the JavaScript code into this file.
4. Open a terminal in Codespaces (View > Terminal).
5. in the terminal, to install the Octokit library, run
    ```
    npm install @octokit/rest
    ```
6. run the script with 
    ```
    node unfollow.js
    ```

Remember to replace `'your_username'` and `'your_token_with_correct_permission'` in the script 
with your actual GitHub username and personal access token.

This is the exact URL for the correct permissions ready for you:

https://github.com/settings/tokens/new?scopes=user:follow&description=Unfollow+Script+Token

I tested it in one run, up to 4K it can scan 
but will take few minutes, so better be sure you have stable connection
and I did not hit the rate limit that time. Enjoy !
