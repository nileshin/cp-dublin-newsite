require('dotenv').config();

const branch_name = (() => {
  const branch_name = process.env.PANTHEON_ENV;
  if (!branch_name) {
    console.log('no branch found, defaulting to dev');
    return 'dev';
  }
  if (branch_name === 'master') {
    console.log('deploying master, setting to live');
    return 'live';
  }
  return branch_name;
})();

const pantheon_environment_url = `${branch_name}-cpdublin-com-3.pantheonsite.io`;
const netlify_url = `competent-brown-d729a3.netlify.app`;

module.exports = {
  branch_name,
  pantheon_environment_url,
  netlify_url,
  lando_environment_url: 'cpdublincom3.lndo.site'
}