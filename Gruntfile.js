module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> \n by @spencermountain\n <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                footer: ""
            },
            dist: {
                //minimum file
                // src: ["./src/core.js", "./src/x64-core.js", "./src/lib-typedarrays.js", "./src/enc-utf16.js", "./src/enc-base64.js", "./src/md5.js", "./src/sha1.js", "./src/sha256.js", "./src/sha224.js", "./src/sha512.js", "./src/sha384.js", "./src/sha3.js", "./src/ripemd160.js", "./src/hmac.js", "./src/pbkdf2.js", "./src/evpkdf.js", "./src/cipher-core.js", "./src/mode-cfb.js", "./src/mode-ctr.js", "./src/mode-ctr-gladman.js", "./src/mode-ofb.js", "./src/mode-ecb.js", "./src/pad-ansix923.js", "./src/pad-iso10126.js", "./src/pad-iso97971.js", "./src/pad-zeropadding.js", "./src/pad-nopadding.js", "./src/format-hex.js", "./src/aes.js", "./src/tripledes.js", "./src/rc4.js", "./src/rabbit.js", "./src/rabbit-legacy.js"],
                //full file
                src: ["./src/core.js", "./src/x64-core.js", "./src/lib-typedarrays.js", "./src/enc-utf16.js", "./src/enc-base64.js", "./src/md5.js", "./src/sha1.js", "./src/sha256.js", "./src/sha224.js", "./src/sha512.js", "./src/sha384.js", "./src/sha3.js", "./src/ripemd160.js", "./src/hmac.js", "./src/pbkdf2.js", "./src/evpkdf.js", "./src/cipher-core.js", "./src/mode-cfb.js", "./src/mode-ctr.js", "./src/mode-ctr-gladman.js", "./src/mode-ofb.js", "./src/mode-ecb.js", "./src/pad-ansix923.js", "./src/pad-iso10126.js", "./src/pad-iso97971.js", "./src/pad-zeropadding.js", "./src/pad-nopadding.js", "./src/format-hex.js", "./src/aes.js", "./src/tripledes.js", "./src/rc4.js", "./src/rabbit.js", "./src/rabbit-legacy.js"],
                dest: './build/cryptojs.js'
            }
        },
        uglify: {
            do :{
                src: ['./build/cryptojs.js'],
                dest: './build/cryptojs.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'uglify']);

};