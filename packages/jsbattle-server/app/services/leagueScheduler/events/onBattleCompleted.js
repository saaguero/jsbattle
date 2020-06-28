
module.exports = async function(ctx) {
  this.logger.debug('Battle results received');
  if(ctx.params.error) {
    let details = ctx.params.refData ? Object.keys(ctx.params.refData).join(' and ') : "UNKNOWN"
    this.logger.warn('Battle failed between: ' + details);
    return;
  }
  try {
    await ctx.call('leagueScheduler.storeBattleResults', {
      refData: ctx.params.refData,
      teamList: ctx.params.teamList,
      ubd: ctx.params.ubd
    });
  } catch(err) {
    this.logger.warn(err);
  }
}
