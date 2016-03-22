## Text Summarizer

* grunt-based build system
* node.js modules

### Installation:

    sudo npm install -g grunt-cli

### Build instructions:

    cd Summarize_Extension
    npm install
    penssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt > mykey.pem
    grunt -force

The .crx packed version is created from unpacked-prod sources.

type in a chrome window -> chrome://extensions

Click load unpacked extension.

Navigate to PATHTO:Summarize_Extension/build/unpacked-prod and select this directory.

![Alt text](/code/images/Preview1.png?raw=true "Homepage")
![Alt text](/code/images/Preview2.png?raw=true "Homepage")

Delete extension when done. Extension is slightly buggy.
