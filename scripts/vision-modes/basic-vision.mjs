/**
 * The vision mode for Basic Vision.
 */
export default class VisionModeBasicVision extends VisionMode {
    constructor() {
        super({
            id: "basicvision",
            label: "DND5E.BasicVision",
            canvas: {
                shader: ColorAdjustmentsSamplerShader,
                uniforms: { contrast: 0, saturation: 0, exposure: 0 },
            },
            lighting: {
                background: { visibility: VisionMode.LIGHTING_VISIBILITY.REQUIRED },
            },
            vision: {
                darkness: { adaptive: true },
                defaults: { contrast: 0, saturation: 0, brightness: 0 },
            },
        });
    }
}
