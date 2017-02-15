
var queue = new createjs.LoadQueue(false);
queue.on("complete", handleComplete, this);


var manifest = getBgManifest()
manifest.push('/images/contact_backdrop_md.png')

queue.loadManifest(manifest)

function handleComplete() {
  console.log('done', arguments)
}

function getBgManifest () {
  var bgManifest = Object.keys(bgs).map(function (i) { return bgs[i].src })

  var nonPriority = bgManifest.slice(0,index)
  var priority = bgManifest.slice(index)

  return priority.concat(nonPriority)
}