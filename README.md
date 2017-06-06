
Install TestCafe:
---
`npm install testcafe`


Install Nightmare Browser (Headless):
---
`npm install testcafe-browser-provider-nightmare`


Only on LINUX !!!
---
```bash
# Requires XVFB to be installed on Linux host systems, otherwise nightmare will not work

apt-get update &&\
    apt-get install -y libgtk2.0-0 libgconf-2-4 \
    libasound2 libxtst6 libxss1 libnss3 xvfb
```

How to Run:
---
```bash
#Linux
* Xvfb -ac -screen scrn 1280x2000x24 :9.0 &
* export DISPLAY=:9.0

node runner.js
```

