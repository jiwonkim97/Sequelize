var DataTypes = require("sequelize").DataTypes;
var _abusing_arm_tbl = require("./abusing_arm_tbl");
var _abusing_list_tbl = require("./abusing_list_tbl");
var _alert_mst = require("./alert_mst");
var _book_n_life_history = require("./book_n_life_history");
var _brand_mst = require("./brand_mst");
var _btc_deposit_tbl = require("./btc_deposit_tbl");
var _btc_mst = require("./btc_mst");
var _btc_on_mileverse = require("./btc_on_mileverse");
var _btc_withdraw_tbl = require("./btc_withdraw_tbl");
var _buy_gifticon_limit = require("./buy_gifticon_limit");
var _cafe24_limit_config = require("./cafe24_limit_config");
var _cert_number_table = require("./cert_number_table");
var _change_limit = require("./change_limit");
var _change_limit_config = require("./change_limit_config");
var _cstmrs = require("./cstmrs");
var _ctgr_mst = require("./ctgr_mst");
var _delete_user_tbl = require("./delete_user_tbl");
var _eth_history_tbl = require("./eth_history_tbl");
var _eth_on_mileverse = require("./eth_on_mileverse");
var _events_ice = require("./events_ice");
var _external_api_keys = require("./external_api_keys");
var _external_history = require("./external_history");
var _members = require("./members");
var _members_adm = require("./members_adm");
var _mvp_code_mst = require("./mvp_code_mst");
var _mvp_decr = require("./mvp_decr");
var _mvp_incr = require("./mvp_incr");
var _mvp_limit_tbl = require("./mvp_limit_tbl");
var _mvp_total = require("./mvp_total");
var _mvp_totals = require("./mvp_totals");
var _notice = require("./notice");
var _prdt_mst = require("./prdt_mst");
var _push_schedule_tbl = require("./push_schedule_tbl");
var _push_token_tbl = require("./push_token_tbl");
var _sample1 = require("./sample1");
var _sample1s = require("./sample1s");
var _sample2 = require("./sample2");
var _sequelizemeta = require("./sequelizemeta");
var _storage_tbl = require("./storage_tbl");
var _swap_limit_tbl = require("./swap_limit_tbl");
var _tmp_table_del = require("./tmp_table_del");
var _type_cd = require("./type_cd");
var _users = require("./users");
var _ver_mst_adr = require("./ver_mst_adr");
var _ver_mst_ios = require("./ver_mst_ios");
var _wallet_mst = require("./wallet_mst");

function initModels(sequelize) {
  var abusing_arm_tbl = _abusing_arm_tbl(sequelize, DataTypes);
  var abusing_list_tbl = _abusing_list_tbl(sequelize, DataTypes);
  var alert_mst = _alert_mst(sequelize, DataTypes);
  var book_n_life_history = _book_n_life_history(sequelize, DataTypes);
  var brand_mst = _brand_mst(sequelize, DataTypes);
  var btc_deposit_tbl = _btc_deposit_tbl(sequelize, DataTypes);
  var btc_mst = _btc_mst(sequelize, DataTypes);
  var btc_on_mileverse = _btc_on_mileverse(sequelize, DataTypes);
  var btc_withdraw_tbl = _btc_withdraw_tbl(sequelize, DataTypes);
  var buy_gifticon_limit = _buy_gifticon_limit(sequelize, DataTypes);
  var cafe24_limit_config = _cafe24_limit_config(sequelize, DataTypes);
  var cert_number_table = _cert_number_table(sequelize, DataTypes);
  var change_limit = _change_limit(sequelize, DataTypes);
  var change_limit_config = _change_limit_config(sequelize, DataTypes);
  var cstmrs = _cstmrs(sequelize, DataTypes);
  var ctgr_mst = _ctgr_mst(sequelize, DataTypes);
  var delete_user_tbl = _delete_user_tbl(sequelize, DataTypes);
  var eth_history_tbl = _eth_history_tbl(sequelize, DataTypes);
  var eth_on_mileverse = _eth_on_mileverse(sequelize, DataTypes);
  var events_ice = _events_ice(sequelize, DataTypes);
  var external_api_keys = _external_api_keys(sequelize, DataTypes);
  var external_history = _external_history(sequelize, DataTypes);
  var members = _members(sequelize, DataTypes);
  var members_adm = _members_adm(sequelize, DataTypes);
  var mvp_code_mst = _mvp_code_mst(sequelize, DataTypes);
  var mvp_decr = _mvp_decr(sequelize, DataTypes);
  var mvp_incr = _mvp_incr(sequelize, DataTypes);
  var mvp_limit_tbl = _mvp_limit_tbl(sequelize, DataTypes);
  var mvp_total = _mvp_total(sequelize, DataTypes);
  var mvp_totals = _mvp_totals(sequelize, DataTypes);
  var notice = _notice(sequelize, DataTypes);
  var prdt_mst = _prdt_mst(sequelize, DataTypes);
  var push_schedule_tbl = _push_schedule_tbl(sequelize, DataTypes);
  var push_token_tbl = _push_token_tbl(sequelize, DataTypes);
  var sample1 = _sample1(sequelize, DataTypes);
  var sample1s = _sample1s(sequelize, DataTypes);
  var sample2 = _sample2(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var storage_tbl = _storage_tbl(sequelize, DataTypes);
  var swap_limit_tbl = _swap_limit_tbl(sequelize, DataTypes);
  var tmp_table_del = _tmp_table_del(sequelize, DataTypes);
  var type_cd = _type_cd(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var ver_mst_adr = _ver_mst_adr(sequelize, DataTypes);
  var ver_mst_ios = _ver_mst_ios(sequelize, DataTypes);
  var wallet_mst = _wallet_mst(sequelize, DataTypes);

  // associate 설정
  members.hasOne(mvp_total, {foreignKey : 'U_ID'});
  brand_mst.hasMany(mvp_decr, {foreignKey: 'BRD_CODE'});
  prdt_mst.hasMany(mvp_decr, {foreignKey: 'PDT_CODE'});
  mvp_code_mst.hasMany(mvp_decr, {foreignKey: 'C_CODE'});
  

  return {
    abusing_arm_tbl,
    abusing_list_tbl,
    alert_mst,
    book_n_life_history,
    brand_mst,
    btc_deposit_tbl,
    btc_mst,
    btc_on_mileverse,
    btc_withdraw_tbl,
    buy_gifticon_limit,
    cafe24_limit_config,
    cert_number_table,
    change_limit,
    change_limit_config,
    cstmrs,
    ctgr_mst,
    delete_user_tbl,
    eth_history_tbl,
    eth_on_mileverse,
    events_ice,
    external_api_keys,
    external_history,
    members,
    members_adm,
    mvp_code_mst,
    mvp_decr,
    mvp_incr,
    mvp_limit_tbl,
    mvp_total,
    mvp_totals,
    notice,
    prdt_mst,
    push_schedule_tbl,
    push_token_tbl,
    sample1,
    sample1s,
    sample2,
    sequelizemeta,
    storage_tbl,
    swap_limit_tbl,
    tmp_table_del,
    type_cd,
    users,
    ver_mst_adr,
    ver_mst_ios,
    wallet_mst,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
