(this["webpackJsonpjam-on-it"]=this["webpackJsonpjam-on-it"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,s=a(0),c=a.n(s),i=a(7),o=a.n(i),l=(a(13),a(2)),u=a(3),h=a(1),m=a(5),p=a(4),d=(a(14),a(15),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(h.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),c.a.createElement("button",{className:"SearchButton",onClick:this.search},"SEARCH"))}}]),a}(c.a.Component)),v=(a(16),a(17),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?c.a.createElement("button",{className:"Track-action",onClick:this.removeTrack},"-"):c.a.createElement("button",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Track"},c.a.createElement("div",{className:"Track-information"},c.a.createElement("h3",null,this.props.track.name),c.a.createElement("p",null,c.a.createElement("small",null,"artist:")," ",this.props.track.artist," | ",c.a.createElement("small",null,"album:")," ",this.props.track.album)),this.renderAction())}}]),a}(c.a.Component)),f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return c.a.createElement(v,{onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval,track:t,key:t.id})})))}}]),a}(c.a.Component),k=(a(18),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchResults"},c.a.createElement("h2",null,"Results"),c.a.createElement(f,{onAdd:this.props.onAdd,isRemoval:!1,tracks:this.props.searchResults}))}}]),a}(c.a.Component)),y=(a(19),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),c.a.createElement(f,{isRemoval:!0,onRemove:this.props.onRemove,tracks:this.props.playlistTracks}),c.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),a}(c.a.Component));r=window.location.href.match(/http:\/\/localhost:3000/)?"http://localhost:3000/":"https://rjaureguijr.github.io/jam-on-it/";var b={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("a8ead8c973304813afd24b59880a2902","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat(r);window.location=s},search:function(e){var t=b.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]}),(function(e){console.error(e.message)}))},savePlaylist:function(e,t){var a,n=b.getAccessToken(),r={Authorization:"Bearer ".concat(n)};if(e&&t.length)return fetch("https://api.spotify.com/v1/me",{headers:r}).then((function(e){return e.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})})}))}))}},T=b,j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"Untitled Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(h.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.find((function(t){return t.id===e.id}))||(t.push(e),this.setState({playlistTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter((function(t){return t.id!==e.id})),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));T.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(e){var t=this;T.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Jam",c.a.createElement("span",{className:"highlight"},"On"),"It!"),c.a.createElement("div",{className:"App"},c.a.createElement(d,{onSearch:this.search}),c.a.createElement("div",{className:"App-playlist"},c.a.createElement(k,{onAdd:this.addTrack,searchResults:this.state.searchResults}),c.a.createElement(y,{onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onSave:this.savePlaylist}))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0a37f4e7.chunk.js.map