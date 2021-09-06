const HashedTimelock = artifacts.require('./hashTimelock.sol')
const TimelockToken= artifacts.require('./timelockToken.sol')

module.exports = function (deployer) {
  deployer.deploy(hashTimelock)
  deployer.deploy(TimelockToken)
  
}
