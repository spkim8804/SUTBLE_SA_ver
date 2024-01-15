function videoinfo(file){
    const onChangeFile = (mediainfo) => {
        const getSize = () => file.size;
        const readChunk = (chunkSize, offset) =>
            new Promise((resolve, reject) => {
            const reader = new FileReader()
                reader.onload = (event) => {
                    if (event.target.error) {
                        reject(event.target.error)
                    }
                    resolve(new Uint8Array(event.target.result))
                }
                reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
            })

            mediainfo
            .analyzeData(getSize, readChunk)
            .then((result) => {
                // console.log(result['media']['track'][1]['FrameRate']);
                return [result['media']['track'][1]['FrameRate'], 1];
            })
            .catch((error) => {
            // output.value = `An error occured:\n${error.stack}`
            })
    }

    MediaInfo(
        {
            // format: 'text',
            format: 'object',
            locateFile: (path, prefix) => prefix + path, // Make sure WASM file is loaded from CDN location
        },
        (mediainfo) => { onChangeFile(mediainfo); }
    )
}