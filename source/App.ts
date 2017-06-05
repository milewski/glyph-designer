import * as SVG from "svg.js";

export class App {

    private chars: string[] = []

    constructor(chars: string) {

        this.chars = chars
            .split('')
            .filter((item, pos, self) => self.indexOf(item) === pos)


        var draw = SVG('canvas').size(500, 50)
        console.log(draw)
        let position = 0;
        this.chars.forEach(char => {

            var text = draw.text(char)
            var gradient = draw.gradient('linear', function (stop) {
                stop.at(0, 'yellow')
                stop.at(1, 'red')
            })
            text.move((position += 20), 20).font({ family: 'helvetica' }).fill(gradient)

            // console.log(text)

        })


    }

}

new App('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aut, beatae consequuntur deserunt, dignissimos dolorem esse est illum ipsum maiores minus mollitia possimus quam similique soluta tempore ullam veniam.')
