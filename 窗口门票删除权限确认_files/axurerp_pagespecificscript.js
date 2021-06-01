for(var i = 0; i < 13; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u11'] = 'top';
u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', u7Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u7LinksClick'></div>")
var u7LinksClick = document.getElementById('u7LinksClick');
function u7Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clickua469065da0184c7eaa0b150cdce8cbbe(event)'>没有权限</div>");
function u7Clickua469065da0184c7eaa0b150cdce8cbbe(e)
{

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku37c87dc54736464384f18effc6d1f9b7(event)'>用例 1</div>");
function u7Clicku37c87dc54736464384f18effc6d1f9b7(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('窗口门票删除.html');

	ToggleLinks(e, 'u7LinksClick');
}
