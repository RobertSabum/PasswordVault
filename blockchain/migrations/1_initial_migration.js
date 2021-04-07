const Migrations = artifacts.require("ChainPass");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
