const { Octokit } = require("@octokit/rest");

// create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `your_token_with_correct_permission` });

async function unfollowNonFollowers() {
  const username = 'your_username';

  // Get list of users who are following you
  const followers = await octokit.paginate(octokit.rest.users.listFollowersForUser, { username });
  const followerLogins = followers.map(user => user.login);

  // Get list of users you are following
  const following = await octokit.paginate(octokit.rest.users.listFollowingForUser, { username });
  const followingLogins = following.map(user => user.login);

  // Unfollow users who are not following you
  for (const user of followingLogins) {
    if (!followerLogins.includes(user)) {
      await octokit.rest.users.unfollow({ username: user });
      console.log(`Unfollowed ${user}`);
    }
  }
}

unfollowNonFollowers().catch(console.error);
