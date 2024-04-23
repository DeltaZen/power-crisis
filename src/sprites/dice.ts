import { DICE_KEYS, IMAGE_KEYS } from "~/constants/image-keys";

const DICE_NUM_TEXTURE_MAP: Record<number, string> = {
  1: DICE_KEYS.DICE_1,
  2: DICE_KEYS.DICE_2,
  3: DICE_KEYS.DICE_3,
  4: DICE_KEYS.DICE_4,
  5: DICE_KEYS.DICE_5,
  6: DICE_KEYS.DICE_6,
};

export class Dice extends Phaser.GameObjects.Sprite {
  range: number[] = [1, 2, 3];

  constructor(scene: Phaser.Scene, x: number, y: number, range: number[]) {
    super(scene, x, y, IMAGE_KEYS.DICE, DICE_KEYS.DICE_1);
    scene.add.existing(this);
    this.range = range;
  }

  public rollDice() {
    return new Promise<number>((resolve) => {
      let counter = 0;
      const timer = setInterval(() => {
        this.setTexture(
          IMAGE_KEYS.DICE,
          DICE_NUM_TEXTURE_MAP[(counter % 3) + 1]
        );
        counter++;
        if (counter === 10) {
          const num = Phaser.Math.RND.pick([1, 2, 3]);
          this.setTexture(IMAGE_KEYS.DICE, DICE_NUM_TEXTURE_MAP[num]);
          clearInterval(timer);
          resolve(num);
        }
      }, 80);
    });
  }
}
