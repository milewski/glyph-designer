// import { Image } from '../Classes/Image';
// import { Sort } from '../Classes/Sort';
//
// export class Packer {
//
//     public bin: BasicImageInterface;
//
//     constructor(public width: number, public height: number) {
//         this.createBin(width, height);
//     }
//
//     resetBin(): BasicImageInterface {
//         return this.createBin(this.width, this.height);
//     }
//
//     sort(images: Image[], algorithm: string): Image[] {
//         return (new Sort(images, algorithm)).sort();
//     }
//
//     createBin(width: number, height: number): BasicImageInterface {
//         return this.bin = {
//             x: 0, y: 0, width, height
//         };
//     }
//
//     pack(images: Image[]): Image[] {
//
//         let bin = 0,
//             clone = images.slice();
//
//         while (clone.length) {
//
//             clone = <any[]>clone
//                 .map(image => this.fit(image, bin + 1))
//                 .filter(result => result instanceof Image);
//
//             bin += 1;
//             this.resetBin();
//
//         }
//
//         return images;
//
//     }
//
//     private fit(image: Image, bin: number): Image | void {
//
//         let node = this.process(this.bin, image);
//
//         if (!node) return image;
//
//         image.pack(bin, this.split(node, image.width, image.height));
//
//     }
//
//     process(root, image: Image) {
//
//         if (root.used)
//             return this.process(root.right, image) || this.process(root.down, image);
//         else if ((image.width <= root.width) && (image.height <= root.height))
//             return root;
//
//         return null;
//
//     }
//
//     split(node, width, height) {
//         node.used = true;
//         node.down = { x: node.x, y: node.y + height, width: node.width, height: node.height - height };
//         node.right = { x: node.x + width, y: node.y, width: node.width - width, height };
//         return node;
//     }
//
// }
