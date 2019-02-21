
## Overview
The purpose of this repo is to provide folks an opportunity to evaluate Inspect's motion functionality (now in beta.)

## Contents
1. Studio file with 2 interactions and multiple animating layers
2. Basic markup and css as a jumping off point for implementation.

## Notes on the provided code
The markup and css doesn't require any preprocessors or build steps. There is a simple javascript function that
toggles a class `.expanded` on the `#app` div and in the css there's a selector that applies the .expanded class to
the navigation.

All you need do is run a simple server to see the code. Python example:
```
cd /to/the/directory
python -m SimpleHTTPServer
```
And then visit localhost on the port reported by the console.
You can see the markup running here: https://invisionapp.github.io/inspect-motion-example/


## Getting Support
How should they contact us?
