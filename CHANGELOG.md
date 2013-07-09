<a name="v0.5.0-SNAPSHOT"></a>
### v0.5.0-SNAPSHOT (2013-07-08)


#### Bug Fixes

* **accordion:** Allow accordion heading directives as attributes. ([25f6e55c](http://github.com/angular-ui/bootstrap/commit/25f6e55c3c6655a723f382dd14204e71623fa0ae), closes [#540](http://github.com/angular-ui/bootstrap/issues/540))
* **carousel:**
  * fix error with deleting multiple slides at once ([3fcb70f0](http://github.com/angular-ui/bootstrap/commit/3fcb70f0f6d1d22e63874a2bb658f3b2e50e9953))
  * make slide 'active' binding optional ([17d6c3b5](http://github.com/angular-ui/bootstrap/commit/17d6c3b58c79a9b9deeb06c26f2a7effa5267dbd))
  * do not allow user to change slide if transitioning ([1d19663f](http://github.com/angular-ui/bootstrap/commit/1d19663f279e7b30d81bd7569a22b7a02ef4b932))
* **datepicker:** handle correctly `min`/`max` when cleared ([566bdd16](http://github.com/angular-ui/bootstrap/commit/566bdd164133992a0390a6669e0fdab41b58b05a))
* **dialog:** remove dialogOpenClass to get in line with v2.3 ([f009b23f](http://github.com/angular-ui/bootstrap/commit/f009b23f2dcb7ba46dcc0d2b486ec2819dbf824b))
* **pagination:** bind *-text attributes ([e1bff6b7](http://github.com/angular-ui/bootstrap/commit/e1bff6b703790110f5872f6c46efca7e338cbe30))
* **progressbar:** user `percent` attribute instead of `value`. ([58efec80](http://github.com/angular-ui/bootstrap/commit/58efec801ca8d1dbc00cac855d988f4f02b2229e), closes [#535](http://github.com/angular-ui/bootstrap/issues/535))
* **rating:** evaluate `max` attribute on parent scope ([60619d51](http://github.com/angular-ui/bootstrap/commit/60619d511b368a1e55f3545a4cd00e0335f48fe9))
* **tabs:**
  * make tabs added with active=true be selected ([360cd5ca](http://github.com/angular-ui/bootstrap/commit/360cd5ca950f8f837de8cc436a63e1edda4f0334))
  * fix tab content compiling wrong (, #631, #574) ([224bc2f5](http://github.com/angular-ui/bootstrap/commit/224bc2f599cbc2b2b8bad442d4bb2dbe6f683ecb), closes [#599](http://github.com/angular-ui/bootstrap/issues/599))
  * Make tabset template correctly use tabset attributes (#584) ([8868f236](http://github.com/angular-ui/bootstrap/commit/8868f236ee65e6b357079f80c10f070d6398e179))
  * make tab contents be correctly connected to parent (#524) ([be7ecff0](http://github.com/angular-ui/bootstrap/commit/be7ecff01c150676337a3d52a6ff84d03b969c08))
* **timepicker:** prevent date change ([ee741707](http://github.com/angular-ui/bootstrap/commit/ee7417071d1dd183768cef5596e2378ccd4ae0f7))
* **tooltip:**
  * make sure tooltip scope is evicted from cache ([9246905a](http://github.com/angular-ui/bootstrap/commit/9246905acc7a41956e1879242617a7421530619c), closes [#484](http://github.com/angular-ui/bootstrap/issues/484))
  * support of custom $interpolate.startSymbol ([88c94ee6](http://github.com/angular-ui/bootstrap/commit/88c94ee681a9c4d8e464d82c09f8163bbdc0a365))
  * tooltips will hide on scope.$destroy ([3e5a58e5](http://github.com/angular-ui/bootstrap/commit/3e5a58e54cda36f3171bf5463646876c1c44a81a), closes [#410](http://github.com/angular-ui/bootstrap/issues/410))
  * close tooltips appended to body on location change ([041261b5](http://github.com/angular-ui/bootstrap/commit/041261b5366aa44a0c0314e8262c91d1d867f4d1), closes [#345](http://github.com/angular-ui/bootstrap/issues/345))
  * fix positioning error when appendToBody is set to true ([76fee1f9](http://github.com/angular-ui/bootstrap/commit/76fee1f9e1e583c34c18a8b00886d5d4d7477b89), closes [#387](http://github.com/angular-ui/bootstrap/issues/387))
* **typeahead:**
  * correctly close popup on match selection ([624fd5f5](http://github.com/angular-ui/bootstrap/commit/624fd5f5659cb75fee5f51c23c15753f413e06c8))
  * fixed waitTime functionality ([90a8aa79](http://github.com/angular-ui/bootstrap/commit/90a8aa79c819e79f09e049ad7622c5c82e3da9b0), closes [#573](http://github.com/angular-ui/bootstrap/issues/573))
  * separate text field rendering and drop down rendering ([ea1e858a](http://github.com/angular-ui/bootstrap/commit/ea1e858a4923ef234db9622d0f9ba70d6d198ec3), closes [#240](http://github.com/angular-ui/bootstrap/issues/240), [#274](http://github.com/angular-ui/bootstrap/issues/274))
  * properly render initial input value ([c4e169cb](http://github.com/angular-ui/bootstrap/commit/c4e169cbb7b1b4c33cc092e85f63e6e8745e3393), closes [#591](http://github.com/angular-ui/bootstrap/issues/591))
  * play nicelly with existing formatters ([d2df0b35](http://github.com/angular-ui/bootstrap/commit/d2df0b35aeda93a702ef943293c2300b5400b1db))
  * return focus to the input after selecting a suggestion ([04a21e33](http://github.com/angular-ui/bootstrap/commit/04a21e33b03323946662fb83abf2dbbf058cc5d0))


#### Features

* **buttons:** support dynamic values in btn-radio ([e8c5b548](http://github.com/angular-ui/bootstrap/commit/e8c5b548c732e1c3f87c944e41f9330733979364))
* **carousel:** add option to prevent pause ([5f895c13](http://github.com/angular-ui/bootstrap/commit/5f895c13ec802702987fac4f3326eb353c1842c2))
* **datepicker:** add datepicker directive ([30a00a07](http://github.com/angular-ui/bootstrap/commit/30a00a07733c5804cc4209a0018d578043d83826), closes [#366](http://github.com/angular-ui/bootstrap/issues/366))
* **pagination:**
  * add pager directive ([d9526475](http://github.com/angular-ui/bootstrap/commit/d952647565e0fc32f14d22589e1144da045c4cf1))
  * option for different mode when maxSize ([a023d082](http://github.com/angular-ui/bootstrap/commit/a023d082b3e42697d3d4dbcf9b62b58a0429da03))
* **rating:** added onHover and onLeave. ([5b1115e3](http://github.com/angular-ui/bootstrap/commit/5b1115e3f6d4ffb30595d22f52c46e28611c052e))
* **tabs:**
  * add support for other navigation types, like 'pills' ([53e0a39f](http://github.com/angular-ui/bootstrap/commit/53e0a39f717be2e0d8f179803a9748d92bd354bf))
  * add support for vertical option ([88d17a75](http://github.com/angular-ui/bootstrap/commit/88d17a75dc49f34cdb47c0696654460aecc2b5ae))
  * support disabled state ([2b78dd16](http://github.com/angular-ui/bootstrap/commit/2b78dd16abd7e09846fa484331b5c35ece6619a2))
  * Change directive name, add features ([c5326595](http://github.com/angular-ui/bootstrap/commit/c53265955bbd4e894a98abe196764707d1a16ae8), closes [#186](http://github.com/angular-ui/bootstrap/issues/186), [#124](http://github.com/angular-ui/bootstrap/issues/124), [#141](http://github.com/angular-ui/bootstrap/issues/141), [#153](http://github.com/angular-ui/bootstrap/issues/153))
* **timepicker:** add timepicker directive ([9bc5207b](http://github.com/angular-ui/bootstrap/commit/9bc5207b2c650f5bba81a7bbf8c22e0d9778d58c))
* **tooltip:**
  * add custom trigger support ([dfa53155](http://github.com/angular-ui/bootstrap/commit/dfa53155bf59c25b3c7fe6779f1698c2ef7dddd9), closes [#382](http://github.com/angular-ui/bootstrap/issues/382))
  * add *-append-to-body attribute ([d0896263](http://github.com/angular-ui/bootstrap/commit/d08962634bad88f72fc409704f42684355750167), closes [#395](http://github.com/angular-ui/bootstrap/issues/395))
  * Added mouse placement option ([ace7bc60](http://github.com/angular-ui/bootstrap/commit/ace7bc60e5981934ae370d40096ddf0e43b21538))
* **typeahead:**
  * support custom templates for matched items ([e2238174](http://github.com/angular-ui/bootstrap/commit/e2238174d282c8e71684bcbd8d8f5a88763b9eab), closes [#182](http://github.com/angular-ui/bootstrap/issues/182))
  * support wait-ms option ([7f35a3f2](http://github.com/angular-ui/bootstrap/commit/7f35a3f2e7a0367625a757e1583f271282db5f4e))
  * support typeahead-on-select callback ([91ac17c9](http://github.com/angular-ui/bootstrap/commit/91ac17c9ed691a99647b66b3f464e3585398be19), closes [#433](http://github.com/angular-ui/bootstrap/issues/433))


#### Breaking Changes

* The 'value' is replaced by 'percent'.

  Before:

  ``` 
  <progress value="..."></progress>
  ``` 

  After:

  ``` 
  <progress percent="..."></progress>
  ``` 
 ([58efec80](http://github.com/angular-ui/bootstrap/commit/58efec801ca8d1dbc00cac855d988f4f02b2229e))
* The 'first-text', 'previous-text', 'next-text' and 'last-text'
  attributes are now binded to parent scope.

  To migrate your code, surround the text of these attributes with quotes.

  Before:

  ``` 
  <pagination first-text="<<" ...></pagination>
  ``` 

  After:

  ``` 
  <pagination first-text="'<<'" ...></pagination>
  ``` 
 ([e1bff6b7](http://github.com/angular-ui/bootstrap/commit/e1bff6b703790110f5872f6c46efca7e338cbe30))
* The 'tabs' directive has been renamed to 'tabset', and
 the 'pane' directive has been renamed to 'tab'.

    To migrate your code, follow the example below.

    Before:

  ``` 
    <tabs>
      <pane heading="one">
        First Content
      </pane>
      <pane ng-repeat="apple in basket" heading="{{apple.heading}}">
        {{apple.content}}
      </pane>
    </tabs>
  ``` 

    After:

  ``` 
    <tabset>
      <tab heading="one">
        First Content
      </tab>
      <tab ng-repeat="apple in basket" heading="{{apple.heading}}">
        {{apple.content}}
      </tab>
    </tabset>
  ``` 
 ([c5326595](http://github.com/angular-ui/bootstrap/commit/c53265955bbd4e894a98abe196764707d1a16ae8))

<a name="v0.5.0-SNAPSHOT"></a>
### v0.5.0-SNAPSHOT (2013-07-08)


#### Bug Fixes

* **accordion:** Allow accordion heading directives as attributes. ([25f6e55c](http://github.com/angular-ui/bootstrap/commit/25f6e55c3c6655a723f382dd14204e71623fa0ae), closes [#540](http://github.com/angular-ui/bootstrap/issues/540))
* **carousel:**
  * fix error with deleting multiple slides at once ([3fcb70f0](http://github.com/angular-ui/bootstrap/commit/3fcb70f0f6d1d22e63874a2bb658f3b2e50e9953))
  * make slide 'active' binding optional ([17d6c3b5](http://github.com/angular-ui/bootstrap/commit/17d6c3b58c79a9b9deeb06c26f2a7effa5267dbd))
  * do not allow user to change slide if transitioning ([1d19663f](http://github.com/angular-ui/bootstrap/commit/1d19663f279e7b30d81bd7569a22b7a02ef4b932))
* **datepicker:** handle correctly `min`/`max` when cleared ([566bdd16](http://github.com/angular-ui/bootstrap/commit/566bdd164133992a0390a6669e0fdab41b58b05a))
* **dialog:** remove dialogOpenClass to get in line with v2.3 ([f009b23f](http://github.com/angular-ui/bootstrap/commit/f009b23f2dcb7ba46dcc0d2b486ec2819dbf824b))
* **pagination:** bind *-text attributes ([e1bff6b7](http://github.com/angular-ui/bootstrap/commit/e1bff6b703790110f5872f6c46efca7e338cbe30))
* **progressbar:** user `percent` attribute instead of `value`. ([58efec80](http://github.com/angular-ui/bootstrap/commit/58efec801ca8d1dbc00cac855d988f4f02b2229e), closes [#535](http://github.com/angular-ui/bootstrap/issues/535))
* **rating:** evaluate `max` attribute on parent scope ([60619d51](http://github.com/angular-ui/bootstrap/commit/60619d511b368a1e55f3545a4cd00e0335f48fe9))
* **tabs:**
  * make tabs added with active=true be selected ([360cd5ca](http://github.com/angular-ui/bootstrap/commit/360cd5ca950f8f837de8cc436a63e1edda4f0334))
  * fix tab content compiling wrong (, #631, #574) ([224bc2f5](http://github.com/angular-ui/bootstrap/commit/224bc2f599cbc2b2b8bad442d4bb2dbe6f683ecb), closes [#599](http://github.com/angular-ui/bootstrap/issues/599))
  * Make tabset template correctly use tabset attributes (#584) ([8868f236](http://github.com/angular-ui/bootstrap/commit/8868f236ee65e6b357079f80c10f070d6398e179))
  * make tab contents be correctly connected to parent (#524) ([be7ecff0](http://github.com/angular-ui/bootstrap/commit/be7ecff01c150676337a3d52a6ff84d03b969c08))
* **timepicker:** prevent date change ([ee741707](http://github.com/angular-ui/bootstrap/commit/ee7417071d1dd183768cef5596e2378ccd4ae0f7))
* **tooltip:**
  * make sure tooltip scope is evicted from cache ([9246905a](http://github.com/angular-ui/bootstrap/commit/9246905acc7a41956e1879242617a7421530619c), closes [#484](http://github.com/angular-ui/bootstrap/issues/484))
  * support of custom $interpolate.startSymbol ([88c94ee6](http://github.com/angular-ui/bootstrap/commit/88c94ee681a9c4d8e464d82c09f8163bbdc0a365))
  * tooltips will hide on scope.$destroy ([3e5a58e5](http://github.com/angular-ui/bootstrap/commit/3e5a58e54cda36f3171bf5463646876c1c44a81a), closes [#410](http://github.com/angular-ui/bootstrap/issues/410))
  * close tooltips appended to body on location change ([041261b5](http://github.com/angular-ui/bootstrap/commit/041261b5366aa44a0c0314e8262c91d1d867f4d1), closes [#345](http://github.com/angular-ui/bootstrap/issues/345))
  * fix positioning error when appendToBody is set to true ([76fee1f9](http://github.com/angular-ui/bootstrap/commit/76fee1f9e1e583c34c18a8b00886d5d4d7477b89), closes [#387](http://github.com/angular-ui/bootstrap/issues/387))
* **typeahead:**
  * correctly close popup on match selection ([624fd5f5](http://github.com/angular-ui/bootstrap/commit/624fd5f5659cb75fee5f51c23c15753f413e06c8))
  * fixed waitTime functionality ([90a8aa79](http://github.com/angular-ui/bootstrap/commit/90a8aa79c819e79f09e049ad7622c5c82e3da9b0), closes [#573](http://github.com/angular-ui/bootstrap/issues/573))
  * separate text field rendering and drop down rendering ([ea1e858a](http://github.com/angular-ui/bootstrap/commit/ea1e858a4923ef234db9622d0f9ba70d6d198ec3), closes [#240](http://github.com/angular-ui/bootstrap/issues/240), [#274](http://github.com/angular-ui/bootstrap/issues/274))
  * properly render initial input value ([c4e169cb](http://github.com/angular-ui/bootstrap/commit/c4e169cbb7b1b4c33cc092e85f63e6e8745e3393), closes [#591](http://github.com/angular-ui/bootstrap/issues/591))
  * play nicelly with existing formatters ([d2df0b35](http://github.com/angular-ui/bootstrap/commit/d2df0b35aeda93a702ef943293c2300b5400b1db))
  * return focus to the input after selecting a suggestion ([04a21e33](http://github.com/angular-ui/bootstrap/commit/04a21e33b03323946662fb83abf2dbbf058cc5d0))


#### Features

* **buttons:** support dynamic values in btn-radio ([e8c5b548](http://github.com/angular-ui/bootstrap/commit/e8c5b548c732e1c3f87c944e41f9330733979364))
* **carousel:** add option to prevent pause ([5f895c13](http://github.com/angular-ui/bootstrap/commit/5f895c13ec802702987fac4f3326eb353c1842c2))
* **datepicker:** add datepicker directive ([30a00a07](http://github.com/angular-ui/bootstrap/commit/30a00a07733c5804cc4209a0018d578043d83826), closes [#366](http://github.com/angular-ui/bootstrap/issues/366))
* **pagination:**
  * add pager directive ([d9526475](http://github.com/angular-ui/bootstrap/commit/d952647565e0fc32f14d22589e1144da045c4cf1))
  * option for different mode when maxSize ([a023d082](http://github.com/angular-ui/bootstrap/commit/a023d082b3e42697d3d4dbcf9b62b58a0429da03))
* **rating:** added onHover and onLeave. ([5b1115e3](http://github.com/angular-ui/bootstrap/commit/5b1115e3f6d4ffb30595d22f52c46e28611c052e))
* **tabs:**
  * add support for other navigation types, like 'pills' ([53e0a39f](http://github.com/angular-ui/bootstrap/commit/53e0a39f717be2e0d8f179803a9748d92bd354bf))
  * add support for vertical option ([88d17a75](http://github.com/angular-ui/bootstrap/commit/88d17a75dc49f34cdb47c0696654460aecc2b5ae))
  * support disabled state ([2b78dd16](http://github.com/angular-ui/bootstrap/commit/2b78dd16abd7e09846fa484331b5c35ece6619a2))
  * Change directive name, add features ([c5326595](http://github.com/angular-ui/bootstrap/commit/c53265955bbd4e894a98abe196764707d1a16ae8), closes [#186](http://github.com/angular-ui/bootstrap/issues/186), [#124](http://github.com/angular-ui/bootstrap/issues/124), [#141](http://github.com/angular-ui/bootstrap/issues/141), [#153](http://github.com/angular-ui/bootstrap/issues/153))
* **timepicker:** add timepicker directive ([9bc5207b](http://github.com/angular-ui/bootstrap/commit/9bc5207b2c650f5bba81a7bbf8c22e0d9778d58c))
* **tooltip:**
  * add custom trigger support ([dfa53155](http://github.com/angular-ui/bootstrap/commit/dfa53155bf59c25b3c7fe6779f1698c2ef7dddd9), closes [#382](http://github.com/angular-ui/bootstrap/issues/382))
  * add *-append-to-body attribute ([d0896263](http://github.com/angular-ui/bootstrap/commit/d08962634bad88f72fc409704f42684355750167), closes [#395](http://github.com/angular-ui/bootstrap/issues/395))
  * Added mouse placement option ([ace7bc60](http://github.com/angular-ui/bootstrap/commit/ace7bc60e5981934ae370d40096ddf0e43b21538))
* **typeahead:**
  * support custom templates for matched items ([e2238174](http://github.com/angular-ui/bootstrap/commit/e2238174d282c8e71684bcbd8d8f5a88763b9eab), closes [#182](http://github.com/angular-ui/bootstrap/issues/182))
  * support wait-ms option ([7f35a3f2](http://github.com/angular-ui/bootstrap/commit/7f35a3f2e7a0367625a757e1583f271282db5f4e))
  * support typeahead-on-select callback ([91ac17c9](http://github.com/angular-ui/bootstrap/commit/91ac17c9ed691a99647b66b3f464e3585398be19), closes [#433](http://github.com/angular-ui/bootstrap/issues/433))


#### Breaking Changes

* The 'value' is replaced by 'percent'.

  Before:

  <progress value="..."></progress>

  After:

  <progress percent="..."></progress>
 ([58efec80](http://github.com/angular-ui/bootstrap/commit/58efec801ca8d1dbc00cac855d988f4f02b2229e))
* The 'first-text', 'previous-text', 'next-text' and 'last-text'
  attributes are now binded to parent scope.

  To migrate your code, surround the text of these attributes with quotes.

  Before:

  <pagination first-text="<<" ...></pagination>

  After:

  <pagination first-text="'<<'" ...></pagination>
 ([e1bff6b7](http://github.com/angular-ui/bootstrap/commit/e1bff6b703790110f5872f6c46efca7e338cbe30))
* The 'tabs' directive has been renamed to 'tabset', and
 the 'pane' directive has been renamed to 'tab'.

    To migrate your code, follow the example below.

    Before:

    <tabs>
      <pane heading="one">
        First Content
      </pane>
      <pane ng-repeat="apple in basket" heading="{{apple.heading}}">
        {{apple.content}}
      </pane>
    </tabs>

    After:

    <tabset>
      <tab heading="one">
        First Content
      </tab>
      <tab ng-repeat="apple in basket" heading="{{apple.heading}}">
        {{apple.content}}
      </tab>
    </tabset>
 ([c5326595](http://github.com/angular-ui/bootstrap/commit/c53265955bbd4e894a98abe196764707d1a16ae8))

<a name="v0.5.0-SNAPSHOT"></a>
### v0.5.0-SNAPSHOT (2013-07-08)


#### Bug Fixes

* **accordion:** Allow accordion heading directives as attributes. ([25f6e55c](http://github.com/angular-ui/bootstrap/commit/25f6e55c3c6655a723f382dd14204e71623fa0ae), closes [#540](http://github.com/angular-ui/bootstrap/issues/540))
* **carousel:**
  * fix error with deleting multiple slides at once ([3fcb70f0](http://github.com/angular-ui/bootstrap/commit/3fcb70f0f6d1d22e63874a2bb658f3b2e50e9953))
  * make slide 'active' binding optional ([17d6c3b5](http://github.com/angular-ui/bootstrap/commit/17d6c3b58c79a9b9deeb06c26f2a7effa5267dbd))
  * do not allow user to change slide if transitioning ([1d19663f](http://github.com/angular-ui/bootstrap/commit/1d19663f279e7b30d81bd7569a22b7a02ef4b932))
* **datepicker:** handle correctly `min`/`max` when cleared ([566bdd16](http://github.com/angular-ui/bootstrap/commit/566bdd164133992a0390a6669e0fdab41b58b05a))
* **dialog:** remove dialogOpenClass to get in line with v2.3 ([f009b23f](http://github.com/angular-ui/bootstrap/commit/f009b23f2dcb7ba46dcc0d2b486ec2819dbf824b))
* **pagination:** bind *-text attributes ([e1bff6b7](http://github.com/angular-ui/bootstrap/commit/e1bff6b703790110f5872f6c46efca7e338cbe30))
* **progressbar:** user `percent` attribute instead of `value`. ([58efec80](http://github.com/angular-ui/bootstrap/commit/58efec801ca8d1dbc00cac855d988f4f02b2229e), closes [#535](http://github.com/angular-ui/bootstrap/issues/535))
* **rating:** evaluate `max` attribute on parent scope ([60619d51](http://github.com/angular-ui/bootstrap/commit/60619d511b368a1e55f3545a4cd00e0335f48fe9))
* **tabs:**
  * make tabs added with active=true be selected ([360cd5ca](http://github.com/angular-ui/bootstrap/commit/360cd5ca950f8f837de8cc436a63e1edda4f0334))
  * fix tab content compiling wrong (, #631, #574) ([224bc2f5](http://github.com/angular-ui/bootstrap/commit/224bc2f599cbc2b2b8bad442d4bb2dbe6f683ecb), closes [#599](http://github.com/angular-ui/bootstrap/issues/599))
  * Make tabset template correctly use tabset attributes (#584) ([8868f236](http://github.com/angular-ui/bootstrap/commit/8868f236ee65e6b357079f80c10f070d6398e179))
  * make tab contents be correctly connected to parent (#524) ([be7ecff0](http://github.com/angular-ui/bootstrap/commit/be7ecff01c150676337a3d52a6ff84d03b969c08))
* **timepicker:** prevent date change ([ee741707](http://github.com/angular-ui/bootstrap/commit/ee7417071d1dd183768cef5596e2378ccd4ae0f7))
* **tooltip:**
  * make sure tooltip scope is evicted from cache ([9246905a](http://github.com/angular-ui/bootstrap/commit/9246905acc7a41956e1879242617a7421530619c), closes [#484](http://github.com/angular-ui/bootstrap/issues/484))
  * support of custom $interpolate.startSymbol ([88c94ee6](http://github.com/angular-ui/bootstrap/commit/88c94ee681a9c4d8e464d82c09f8163bbdc0a365))
  * tooltips will hide on scope.$destroy ([3e5a58e5](http://github.com/angular-ui/bootstrap/commit/3e5a58e54cda36f3171bf5463646876c1c44a81a), closes [#410](http://github.com/angular-ui/bootstrap/issues/410))
  * close tooltips appended to body on location change ([041261b5](http://github.com/angular-ui/bootstrap/commit/041261b5366aa44a0c0314e8262c91d1d867f4d1), closes [#345](http://github.com/angular-ui/bootstrap/issues/345))
  * fix positioning error when appendToBody is set to true ([76fee1f9](http://github.com/angular-ui/bootstrap/commit/76fee1f9e1e583c34c18a8b00886d5d4d7477b89), closes [#387](http://github.com/angular-ui/bootstrap/issues/387))
* **typeahead:**
  * correctly close popup on match selection ([624fd5f5](http://github.com/angular-ui/bootstrap/commit/624fd5f5659cb75fee5f51c23c15753f413e06c8))
  * fixed waitTime functionality ([90a8aa79](http://github.com/angular-ui/bootstrap/commit/90a8aa79c819e79f09e049ad7622c5c82e3da9b0), closes [#573](http://github.com/angular-ui/bootstrap/issues/573))
  * separate text field rendering and drop down rendering ([ea1e858a](http://github.com/angular-ui/bootstrap/commit/ea1e858a4923ef234db9622d0f9ba70d6d198ec3), closes [#240](http://github.com/angular-ui/bootstrap/issues/240), [#274](http://github.com/angular-ui/bootstrap/issues/274))
  * properly render initial input value ([c4e169cb](http://github.com/angular-ui/bootstrap/commit/c4e169cbb7b1b4c33cc092e85f63e6e8745e3393), closes [#591](http://github.com/angular-ui/bootstrap/issues/591))
  * play nicelly with existing formatters ([d2df0b35](http://github.com/angular-ui/bootstrap/commit/d2df0b35aeda93a702ef943293c2300b5400b1db))
  * return focus to the input after selecting a suggestion ([04a21e33](http://github.com/angular-ui/bootstrap/commit/04a21e33b03323946662fb83abf2dbbf058cc5d0))


#### Features

* **buttons:** support dynamic values in btn-radio ([e8c5b548](http://github.com/angular-ui/bootstrap/commit/e8c5b548c732e1c3f87c944e41f9330733979364))
* **carousel:** add option to prevent pause ([5f895c13](http://github.com/angular-ui/bootstrap/commit/5f895c13ec802702987fac4f3326eb353c1842c2))
* **datepicker:** add datepicker directive ([30a00a07](http://github.com/angular-ui/bootstrap/commit/30a00a07733c5804cc4209a0018d578043d83826), closes [#366](http://github.com/angular-ui/bootstrap/issues/366))
* **pagination:**
  * add pager directive ([d9526475](http://github.com/angular-ui/bootstrap/commit/d952647565e0fc32f14d22589e1144da045c4cf1))
  * option for different mode when maxSize ([a023d082](http://github.com/angular-ui/bootstrap/commit/a023d082b3e42697d3d4dbcf9b62b58a0429da03))
* **rating:** added onHover and onLeave. ([5b1115e3](http://github.com/angular-ui/bootstrap/commit/5b1115e3f6d4ffb30595d22f52c46e28611c052e))
* **tabs:**
  * add support for other navigation types, like 'pills' ([53e0a39f](http://github.com/angular-ui/bootstrap/commit/53e0a39f717be2e0d8f179803a9748d92bd354bf))
  * add support for vertical option ([88d17a75](http://github.com/angular-ui/bootstrap/commit/88d17a75dc49f34cdb47c0696654460aecc2b5ae))
  * support disabled state ([2b78dd16](http://github.com/angular-ui/bootstrap/commit/2b78dd16abd7e09846fa484331b5c35ece6619a2))
  * Change directive name, add features ([c5326595](http://github.com/angular-ui/bootstrap/commit/c53265955bbd4e894a98abe196764707d1a16ae8), closes [#186](http://github.com/angular-ui/bootstrap/issues/186), [#124](http://github.com/angular-ui/bootstrap/issues/124), [#141](http://github.com/angular-ui/bootstrap/issues/141), [#153](http://github.com/angular-ui/bootstrap/issues/153))
* **timepicker:** add timepicker directive ([9bc5207b](http://github.com/angular-ui/bootstrap/commit/9bc5207b2c650f5bba81a7bbf8c22e0d9778d58c))
* **tooltip:**
  * add custom trigger support ([dfa53155](http://github.com/angular-ui/bootstrap/commit/dfa53155bf59c25b3c7fe6779f1698c2ef7dddd9), closes [#382](http://github.com/angular-ui/bootstrap/issues/382))
  * add *-append-to-body attribute ([d0896263](http://github.com/angular-ui/bootstrap/commit/d08962634bad88f72fc409704f42684355750167), closes [#395](http://github.com/angular-ui/bootstrap/issues/395))
  * Added mouse placement option ([ace7bc60](http://github.com/angular-ui/bootstrap/commit/ace7bc60e5981934ae370d40096ddf0e43b21538))
* **typeahead:**
  * support custom templates for matched items ([e2238174](http://github.com/angular-ui/bootstrap/commit/e2238174d282c8e71684bcbd8d8f5a88763b9eab), closes [#182](http://github.com/angular-ui/bootstrap/issues/182))
  * support wait-ms option ([7f35a3f2](http://github.com/angular-ui/bootstrap/commit/7f35a3f2e7a0367625a757e1583f271282db5f4e))
  * support typeahead-on-select callback ([91ac17c9](http://github.com/angular-ui/bootstrap/commit/91ac17c9ed691a99647b66b3f464e3585398be19), closes [#433](http://github.com/angular-ui/bootstrap/issues/433))


#### Breaking Changes

* The 'value' is replaced by 'percent'.

  Before:
  ```
  <progress value="..."></progress>
  ```

  After:

  ```
  <progress percent="..."></progress>
  ```
 ([58efec80](http://github.com/angular-ui/bootstrap/commit/58efec801ca8d1dbc00cac855d988f4f02b2229e))
* The 'first-text', 'previous-text', 'next-text' and 'last-text'
  attributes are now binded to parent scope.

  To migrate your code, surround the text of these attributes with quotes.

  Before:

  ```
  <pagination first-text="<<" ...></pagination>
  ```

  After:

  ```
  <pagination first-text="'<<'" ...></pagination>
  ```
 ([e1bff6b7](http://github.com/angular-ui/bootstrap/commit/e1bff6b703790110f5872f6c46efca7e338cbe30))
* The 'tabs' directive has been renamed to 'tabset', and
 the 'pane' directive has been renamed to 'tab'.

    To migrate your code, follow the example below.

    Before:

  ```
    <tabs>
      <pane heading="one">
        First Content
      </pane>
      <pane ng-repeat="apple in basket" heading="{{apple.heading}}">
        {{apple.content}}
      </pane>
    </tabs>
  ```

    After:

  ```
    <tabset>
      <tab heading="one">
        First Content
      </tab>
      <tab ng-repeat="apple in basket" heading="{{apple.heading}}">
        {{apple.content}}
      </tab>
    </tabset>
  ```
 ([c5326595](http://github.com/angular-ui/bootstrap/commit/c53265955bbd4e894a98abe196764707d1a16ae8))

