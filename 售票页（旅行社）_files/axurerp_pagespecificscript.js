for(var i = 0; i < 50; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u8'] = 'top';
u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

SetWidgetFormText('u5', GetWidgetText('u21'));

	SetPanelVisibility('u16','hidden','none',500);

	SetPanelVisibility('u43','','none',500);

	SetPanelVisibility('u45','','none',500);

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u1'] = 'center';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('锁定.html');

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('轮班.html');

}
});
gv_vAlignTable['u18'] = 'center';
$axure.eventManager.keyup('u5', function(e) {

if (ValueContains(GetWidgetText('u5'), '中青旅')) {

	SetPanelVisibility('u16','','none',500);

}
});
gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u47'] = 'center';document.getElementById('u0_img').tabIndex = 0;

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅行社支付页面.html');

}
});
