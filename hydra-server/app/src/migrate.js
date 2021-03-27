const fs = require('fs')
const path = require("path")

let templates = fs.readdirSync( path.resolve("presets") );

if ( !templates ) {
  console.log("Nothing to migrate");
} else {
  let sketches = templates.map(toSketch);
  console.log("Writing " + Object.keys(sketches).length + " sketches to examples.json" );
  console.log(sketches);  
  fs.writeFileSync(path.resolve("examples.json"), JSON.stringify( sketches ));
}

function toSketch( filename ) {
  let sketch_id = filename.replace( ".js", "" ).replace("-", "_");
  let text = fs.readFileSync( path.resolve("presets/" + filename), "utf8" );
  let encoded = encodeURIComponent(text)
  let code = Buffer.from( encoded ).toString( 'base64' )
  return {sketch_id: sketch_id, code: code };
}

