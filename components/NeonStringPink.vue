<template>
  <div class="vx-string-pulse" :class="svgIsVisible && 'vx-string-start'">
    <svg
      width="1280"
      height="171"
      viewBox="0 0 1280 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref="svg"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_129_137)">
        <path
          d="M-126 130.142C-92.8057 131.083 -5.83649 124.5 76.4855 90.6469C217.039 32.8475 185.443 111.462 269.566 90.6469C313.272 79.8327 492.317 22.6575 515 45.2261C537.683 67.7948 493.628 73.7204 508.565 90.6469C523.503 107.573 754.954 60.7261 916.5 60.7261C1078.05 60.7261 1090.57 80.3029 1159.17 90.6469C1227.78 100.991 1330.68 87.3556 1360 69.4887"
          stroke="#F3A1F0"
          stroke-width="2"
          class="neon_string_0"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_129_137"
          x="-165.028"
          y="0"
          width="1564.55"
          height="170.226"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.952941 0 0 0 0 0.631373 0 0 0 0 0.941176 0 0 0 1 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_129_137"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_129_137"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup>
  const svg = ref(null)
  const svgIsVisible = useElementVisibility(svg)
</script>

<style data-made-with="vivus-instant" scoped>
  @media (min-width: 768px) {
    .vx-string-pulse svg {
      animation-name: neon_string_pulse;
      animation-duration: 2000ms;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
  }

  svg {
    position: absolute;
    background-size: 1920px 100%;
    background-position: 50%;
    width: 100%;
    height: 239px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    @media (min-width: 1921px) {
      width: 100%;
    }
  }

  .neon_string_0 {
    height: 100%;
    stroke-dasharray: 1576 1578;
    stroke-dashoffset: 1577;
  }
  .vx-string-start .neon_string_0 {
    animation-name: neon_string_draw;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-delay: 1000ms;
    animation-fill-mode: forwards;
  }

  @keyframes neon_string_draw {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes neon_string_pulse {
    0%,
    100% {
      filter: drop-shadow(0px 0px 15px #f3a1f0);
    }
    50% {
      filter: drop-shadow(0px 0px 25px #fff);
    }
  }
</style>
