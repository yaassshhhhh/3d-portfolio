import { useLoader, useThree } from "@react-three/fiber";
import { EffectComposer, LUT, Vignette, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

export function Effects() {
  // KTX2Loader
  const gl = useThree((state) => state.gl);

  const CustomKTX2Loader = (path) =>
    useLoader(KTX2Loader, path, (loader) => {
      loader
        .setTranscoderPath(
          `https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/basis/`
        )
        .detectSupport(gl);
    });

  // LUTs
  const lut18 = CustomKTX2Loader("/LUTs/Dozoran.ktx2");

  return (
    true && (
      <>
        <EffectComposer dithering stencilBuffer={true}>
          <LUT lut={lut18} />
          <Vignette
            offset={0.2}
            darkness={0.85}
            blendFunction={BlendFunction.NORMAL}
          />
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
          <ChromaticAberration offset={[0.0005, 0.0005]} />
          <Noise opacity={0.02} />
        </EffectComposer>
      </>
    )
  );
}
