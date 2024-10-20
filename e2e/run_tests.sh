#cucumber tag
tag=$1

#export common config file path
export COMMON_CONFIG_FILE=env/common.env

#run ccucumber tests
npm run cucumber -- --profile $tag