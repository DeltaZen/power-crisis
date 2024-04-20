import { Scene } from "phaser";
import { TEXTURE_KEYS } from "~/constants/texture-keys";

export class TileSprite extends Phaser.GameObjects.Sprite {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, TEXTURE_KEYS.YELLOW_7_TILE);
    scene.add.existing(this);
  }
}