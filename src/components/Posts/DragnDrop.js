import React from 'react';
import Dropzone from 'react-dropzone';

class DragnDrop extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFileDrop = (files) => {
        console.log(files);
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        }
    }

    render() {
        return (

            <Dropzone onDrop={this.handleFileDrop}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                </section>
            )}
            </Dropzone>

        )
  }

}

export default DragnDrop;