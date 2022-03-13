import React, { FC, SVGProps } from 'react';

export interface LogoSvgProps extends SVGProps<SVGSVGElement> {
  cx: string;
  cy: string;
  d: string;
  p?: string;
  r: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

const LogoSVG: FC<LogoSvgProps> = props => {
  const { cx, cy, d, p, r, viewBox, x1, x2, y1, y2 } = props;

  return (
    <svg
      aria-labelledby="logo-title"
      clipRule="evenodd"
      fillRule="evenodd"
      imageRendering="optimizeQuality"
      role="img"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      version="1.1"
      viewBox={viewBox}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title id="logo-title">Games Room</title>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="logo-gradient"
          x1={x1}
          x2={x2}
          y1={y1}
          y2={y2}
        >
          <stop offset="0" stopColor="#1414B8" stopOpacity="1" />
          <stop offset="1" stopColor="#2979FF" stopOpacity="1" />
        </linearGradient>
      </defs>
      {p && <path d={p} fill="#000000" fillRule="nonzero" />}
      <circle cx={cx} cy={cy} fill="url(#logo-gradient)" r={r} />
      <path d={d} fill="#ffffff" fillRule="nonzero" />
    </svg>
  );
};

export const HorizontalLogo: FC = () => (
  <LogoSVG
    cx="127.402"
    cy="128.02"
    d="M129.286 43.561l35.163 20.302 0.181 0.113 34.863 20.128c0.787,0.373 1.436,1.038 1.77,1.915 0.156,0.41 0.23,0.83 0.229,1.244l0.004 0 0 81.514c0,1.414 -0.839,2.632 -2.047,3.185l-35.003 20.209 0.003 0.006 -35.089 20.259c-0.559,0.378 -1.232,0.598 -1.958,0.598 -0.725,0 -1.399,-0.22 -1.958,-0.598l-35.089 -20.259 -0.181 -0.113 -34.85 -20.121c-1.1,-0.517 -1.9,-1.594 -2.001,-2.893 -0.007,-0.092 -0.011,-0.183 -0.011,-0.273l-0.003 -81.514c0,-1.414 0.839,-2.632 2.046,-3.185l35.003 -20.209 -0.003 -0.006 35.153 -20.295c1.127,-0.728 2.609,-0.756 3.778,-0.007zm31.663 26.346l-19.585 -11.307 28.132 35.761 20.39 -7.755 -28.741 -16.594 -0.196 -0.105zm33.546 58.113l0 -35.684 -21.534 8.19 21.534 50.997 0 -23.503zm-33.532 58.113l25.57 -14.763 -55.63 -4.445 0 36.555 30.046 -17.347 0.003 0.006 0.011 -0.006zm-67.107 0l30.046 17.347 0 -36.555 -55.631 4.445 25.389 14.658 0.196 0.105zm-33.546 -58.113l0 23.503 21.534 -50.997 -21.534 -8.19 0 35.684zm33.532 -58.113l-28.924 16.699 20.39 7.755 28.133 -35.761 -19.585 11.307 -0.004 -0.006 -0.01 0.006zm27.503 90.205l-34.263 -54.064 -24.822 58.784 59.085 -4.72zm-28.519 -58.069l34.576 54.56 34.577 -54.56 -69.153 0zm34.576 -49.883l-33.734 42.882 67.469 0 -33.735 -42.882zm65.143 112.672l-24.822 -58.784 -34.263 54.064 59.085 4.72z"
    p="M422.244 163.526c-6.602,3.033 -13.382,4.46 -20.697,4.46 -23.73,0 -36.219,-12.668 -36.219,-31.402 0,-27.476 18.734,-48.53 47.995,-48.53 13.916,0 24.265,3.926 32.65,13.917l20.697 -16.771c-10.705,-14.095 -28.19,-21.767 -52.098,-21.767 -47.281,0 -78.505,32.293 -78.505,74.935 0,32.294 23.908,54.24 61.733,54.24 18.02,0 35.149,-5.531 47.816,-15.166l10.349 -51.384 -26.406 0 -7.315 37.468zm125.606 -75.65l-27.654 0 -67.086 102.591 29.975 0 12.489 -20.162 44.961 0 4.461 20.162 28.19 0 -25.336 -102.591zm-40.857 61.733l22.123 -36.576 7.851 36.576 -29.974 0zm194.833 -61.733l-47.816 60.127 -24.979 -60.127 -23.016 0 -20.518 102.591 26.406 0 11.062 -54.953 19.269 44.783 12.489 0 35.862 -45.497 -11.24 55.667 26.406 0 20.518 -102.591 -24.443 0zm128.283 21.589l4.104 -21.589 -80.646 0 -20.518 102.591 82.787 0 4.282 -21.589 -54.953 0 4.103 -20.161 46.746 0 4.104 -20.518 -46.746 0 3.746 -18.734 52.991 0zm42.82 82.965c30.51,0 49.779,-14.274 49.779,-36.041 0,-31.937 -51.028,-23.73 -51.028,-38.182 0,-6.066 7.137,-10.348 19.627,-10.348 10.169,0 20.339,2.498 28.368,7.85l10.527 -21.41c-9.099,-5.352 -22.481,-8.386 -37.111,-8.386 -31.045,0 -49.601,14.452 -49.601,36.398 0,31.758 50.85,24.086 50.85,38.717 0,6.244 -6.78,9.456 -18.377,9.456 -12.133,0 -24.622,-3.39 -34.971,-10.17l-11.062 21.41c8.921,6.245 25.336,10.706 42.999,10.706zm237.833 -88.139c0,-24.444 -17.842,-38.717 -48.887,-38.717l-50.849 0 -24.979 124.893 29.082 0 6.959 -34.97 24.622 0 19.626 34.97 30.509 0 -21.767 -38.539c22.303,-6.958 35.684,-24.086 35.684,-47.637zm-59.592 28.19l-24.622 0 8.743 -43.356 22.837 0c14.809,0 23.373,5.709 23.373,17.842 0,16.593 -11.24,25.514 -30.331,25.514zm118.648 59.949c38.182,0 64.767,-26.05 64.767,-61.377 0,-26.762 -19.448,-45.14 -51.564,-45.14 -37.824,0 -64.587,25.871 -64.587,61.377 0,26.762 19.447,45.14 51.384,45.14zm2.498 -23.017c-16.236,0 -25.514,-9.456 -25.514,-23.551 0,-19.804 12.668,-36.933 33.9,-36.933 16.236,0 25.336,9.635 25.336,23.73 0,19.805 -12.49,36.754 -33.722,36.754zm125.25 23.017c38.182,0 64.766,-26.05 64.766,-61.377 0,-26.762 -19.447,-45.14 -51.563,-45.14 -37.825,0 -64.587,25.871 -64.587,61.377 0,26.762 19.447,45.14 51.384,45.14zm2.498 -23.017c-16.236,0 -25.514,-9.456 -25.514,-23.551 0,-19.804 12.668,-36.933 33.9,-36.933 16.236,0 25.335,9.635 25.335,23.73 0,19.805 -12.489,36.754 -33.721,36.754zm187.875 -81.537l-47.816 60.127 -24.979 -60.127 -23.016 0 -20.518 102.591 26.406 0 11.062 -54.953 19.269 44.783 12.49 0 35.862 -45.497 -11.241 55.667 26.406 0 20.519 -102.591 -24.444 0z"
    r="128.02"
    viewBox="0 0 1513 256.04"
    x1="36.879"
    x2="217.925"
    y1="218.544"
    y2="37.496"
  />
);

export const MixedLogo: FC = () => (
  <LogoSVG
    cx="127.074"
    cy="127.95"
    d="M128.956 43.537l35.145 20.292 0.181 0.112 34.844 20.117c0.786,0.373 1.435,1.037 1.769,1.914 0.156,0.41 0.229,0.83 0.229,1.244l0.003 0 0 81.469c0,1.414 -0.838,2.631 -2.045,3.183l-34.984 20.198 0.003 0.006 -35.07 20.248c-0.559,0.378 -1.232,0.599 -1.957,0.599 -0.725,0 -1.398,-0.221 -1.957,-0.599l-35.07 -20.248 -0.181 -0.112 -34.831 -20.11c-1.1,-0.517 -1.899,-1.594 -2,-2.892 -0.007,-0.091 -0.011,-0.183 -0.011,-0.273l-0.003 -81.469c0,-1.414 0.838,-2.631 2.045,-3.183l34.984 -20.198 -0.003 -0.006 35.133 -20.285c1.128,-0.727 2.608,-0.755 3.776,-0.007zm31.646 26.332l-19.574 -11.301 28.117 35.742 20.379 -7.751 -28.726 -16.585 -0.196 -0.105zm33.528 58.081l0 -35.664 -21.522 8.185 21.522 50.97 0 -23.491zm-33.514 58.082l25.557 -14.756 -55.6 -4.442 0 36.536 30.029 -17.338 0.004 0.006 0.01 -0.006zm-67.07 0l30.029 17.338 0 -36.536 -55.6 4.442 25.375 14.65 0.196 0.106zm-33.528 -58.082l0 23.491 21.522 -50.97 -21.522 -8.185 0 35.664zm33.514 -58.081l-28.908 16.69 20.379 7.751 28.117 -35.742 -19.574 11.301 -0.004 -0.006 -0.01 0.006zm27.488 90.156l-34.244 -54.035 -24.809 58.753 59.053 -4.718zm-28.504 -58.037l34.558 54.529 34.558 -54.529 -69.116 0zm34.558 -49.856l-33.716 42.859 67.432 0 -33.716 -42.859zm65.107 112.611l-24.809 -58.753 -34.244 54.035 59.053 4.718z"
    p="M351.315 90.464c-3.688,1.695 -7.476,2.492 -11.563,2.492 -13.259,0 -20.237,-7.077 -20.237,-17.545 0,-15.351 10.467,-27.114 26.816,-27.114 7.775,0 13.557,2.193 18.243,7.775l11.563 -9.37c-5.981,-7.876 -15.75,-12.162 -29.108,-12.162 -26.417,0 -43.863,18.043 -43.863,41.868 0,18.044 13.359,30.305 34.492,30.305 10.068,0 19.638,-3.09 26.716,-8.473l5.782 -28.71 -14.753 0 -4.088 20.934zm70.18 -42.267l-15.451 0 -37.483 57.32 16.748 0 6.978 -11.265 25.121 0 2.492 11.265 15.75 0 -14.155 -57.32zm-22.828 34.492l12.361 -20.436 4.386 20.436 -16.747 0zm108.858 -34.492l-26.716 33.594 -13.956 -33.594 -12.86 0 -11.464 57.32 14.754 0 6.18 -30.703 10.767 25.021 6.978 0 20.037 -25.42 -6.28 31.102 14.753 0 11.464 -57.32 -13.657 0zm71.675 12.062l2.293 -12.062 -45.059 0 -11.464 57.32 46.255 0 2.393 -12.062 -30.704 0 2.293 -11.265 26.118 0 2.293 -11.464 -26.118 0 2.093 -10.467 29.607 0zm23.925 46.355c17.046,0 27.812,-7.975 27.812,-20.137 0,-17.844 -28.51,-13.258 -28.51,-21.333 0,-3.39 3.987,-5.782 10.966,-5.782 5.682,0 11.364,1.395 15.85,4.386l5.881 -11.962c-5.084,-2.991 -12.56,-4.686 -20.735,-4.686 -17.345,0 -27.713,8.075 -27.713,20.337 0,17.744 28.411,13.457 28.411,21.632 0,3.489 -3.788,5.283 -10.268,5.283 -6.778,0 -13.756,-1.894 -19.538,-5.682l-6.181 11.962c4.985,3.489 14.156,5.982 24.025,5.982zm-232.47 60.729c0,-13.657 -9.969,-21.632 -27.315,-21.632l-28.41 0 -13.957 69.781 16.249 0 3.888 -19.539 13.757 0 10.965 19.539 17.047 0 -12.162 -21.533c12.461,-3.888 19.938,-13.457 19.938,-26.616zm-33.296 15.75l-13.757 0 4.885 -24.223 12.76 0c8.274,0 13.059,3.19 13.059,9.968 0,9.271 -6.28,14.255 -16.947,14.255zm66.292 33.495c21.333,0 36.186,-14.554 36.186,-34.292 0,-14.953 -10.866,-25.221 -28.809,-25.221 -21.134,0 -36.087,14.455 -36.087,34.292 0,14.953 10.866,25.221 28.71,25.221zm1.396 -12.859c-9.072,0 -14.256,-5.284 -14.256,-13.159 0,-11.065 7.078,-20.635 18.941,-20.635 9.071,0 14.155,5.383 14.155,13.258 0,11.065 -6.978,20.536 -18.84,20.536zm69.98 12.859c21.333,0 36.186,-14.554 36.186,-34.292 0,-14.953 -10.866,-25.221 -28.81,-25.221 -21.133,0 -36.086,14.455 -36.086,34.292 0,14.953 10.866,25.221 28.71,25.221zm1.395 -12.859c-9.071,0 -14.255,-5.284 -14.255,-13.159 0,-11.065 7.078,-20.635 18.941,-20.635 9.071,0 14.155,5.383 14.155,13.258 0,11.065 -6.978,20.536 -18.841,20.536zm104.971 -45.557l-26.716 33.594 -13.957 -33.594 -12.859 0 -11.464 57.32 14.754 0 6.18 -30.704 10.766 25.022 6.978 0 20.037 -25.421 -6.28 31.103 14.754 0 11.464 -57.32 -13.657 0z"
    r="127.95"
    viewBox="0 0 636 255.901"
    x1="36.599"
    x2="217.548"
    y1="218.425"
    y2="37.476"
  />
);

export const VerticalLogo: FC = () => (
  <LogoSVG
    cx="272.381"
    cy="128.961"
    d="M274.265 44.501l35.164 20.302 0.181 0.113 34.864 20.128c0.787,0.373 1.436,1.038 1.77,1.915 0.156,0.41 0.229,0.831 0.229,1.245l0.003 0 0 81.515c0,1.414 -0.839,2.633 -2.046,3.185l-35.004 20.209 0.003 0.006 -35.089 20.26c-0.559,0.378 -1.233,0.599 -1.959,0.599 -0.725,0 -1.399,-0.221 -1.958,-0.599l-35.09 -20.26 -0.181 -0.112 -34.851 -20.121c-1.1,-0.518 -1.899,-1.595 -2.001,-2.894 -0.007,-0.091 -0.011,-0.183 -0.011,-0.273l-0.003 -81.515c0,-1.415 0.839,-2.633 2.047,-3.185l35.004 -20.21 -0.004 -0.006 35.154 -20.296c1.127,-0.727 2.609,-0.756 3.778,-0.006zm31.664 26.346l-19.586 -11.308 28.134 35.763 20.39 -7.755 -28.742 -16.595 -0.196 -0.105zm33.546 58.114l0 -35.685 -21.534 8.191 21.534 50.998 0 -23.504zm-33.533 58.114l25.572 -14.763 -55.632 -4.445 0 36.556 30.047 -17.348 0.003 0.007 0.01 -0.007zm-67.108 0l30.047 17.348 0 -36.556 -55.632 4.445 25.389 14.658 0.196 0.105zm-33.546 -58.114l0 23.504 21.534 -50.998 -21.534 -8.191 0 35.685zm33.532 -58.114l-28.924 16.7 20.39 7.755 28.134 -35.763 -19.586 11.308 -0.004 -0.006 -0.01 0.006zm27.503 90.207l-34.263 -54.065 -24.822 58.786 59.085 -4.721zm-28.519 -58.07l34.577 54.56 34.578 -54.56 -69.155 0zm34.577 -49.884l-33.735 42.883 67.471 0 -33.736 -42.883zm65.144 112.675l-24.822 -58.786 -34.264 54.065 59.086 4.721z"
    p="M37.537 344.521c-2.421,0.968 -4.922,1.371 -7.504,1.371 -9.279,0 -14.443,-5.083 -14.443,-12.668 0,-11.296 7.423,-19.607 19.042,-19.607 5.81,0 10.167,1.613 13.879,6.213l11.457 -9.037c-5.083,-6.778 -13.313,-10.409 -24.61,-10.409 -21.463,0 -35.906,14.282 -35.906,33.889 0,14.766 11.135,24.852 28.402,24.852 8.553,0 16.461,-2.421 22.27,-6.778l4.761 -23.803 -14.121 0 -3.227 15.977zm60.355 -33.163l-15.25 0 -30.339 46.638 16.46 0 4.923 -8.15 18.316 0 1.694 8.15 15.492 0 -11.296 -46.638zm-18.397 27.514l7.988 -13.555 2.744 13.555 -10.732 0zm86.498 -27.514l-20.011 25.094 -10.489 -25.094 -12.749 0 -9.279 46.638 14.282 0 4.276 -21.222 7.504 16.945 6.859 0 13.878 -17.832 -4.438 22.109 14.282 0 9.28 -46.638 -13.395 0zm59.871 11.457l2.26 -11.457 -38.247 0 -9.279 46.638 39.134 0 2.259 -11.458 -23.803 0 1.372 -6.778 20.172 0 2.178 -10.812 -20.172 0 1.211 -6.133 22.915 0zm19.688 36.23c14.766,0 23.803,-6.94 23.803,-17.187 0,-14.605 -22.673,-11.297 -22.673,-16.461 0,-1.936 2.42,-3.389 7.262,-3.389 4.599,0 9.198,1.13 12.99,3.47l5.649 -11.296c-4.357,-2.502 -10.651,-3.873 -17.671,-3.873 -14.927,0 -23.803,6.858 -23.803,17.348 0,14.362 22.593,11.457 22.593,16.702 0,2.017 -2.098,3.066 -6.455,3.066 -5.326,0 -10.813,-1.452 -16.058,-4.438l-5.97 11.378c4.438,2.662 11.942,4.68 20.333,4.68zm109.495 -39.538c0,-11.296 -8.311,-17.994 -22.755,-17.994l-24.125 0 -11.297 56.483 15.977 0 2.985 -15.009 8.069 0 8.391 15.009 16.703 0 -9.602 -16.945c9.844,-3.389 15.654,-11.135 15.654,-21.544zm-16.138 1.533c0,6.213 -4.115,9.602 -11.135,9.602l-9.521 0 3.389 -16.541 8.391 0c5.487,0 8.876,2.178 8.876,6.939zm42.765 38.005c17.429,0 29.855,-11.539 29.855,-27.919 0,-12.264 -9.199,-20.817 -23.965,-20.817 -17.348,0 -29.774,11.457 -29.774,27.918 0,12.264 9.199,20.818 23.884,20.818zm1.372 -12.427c-5.971,0 -9.602,-3.711 -9.602,-9.279 0,-7.827 4.76,-14.605 12.829,-14.605 6.052,0 9.522,3.793 9.522,9.36 0,7.747 -4.6,14.524 -12.749,14.524zm56.805 12.427c17.428,0 29.854,-11.539 29.854,-27.919 0,-12.264 -9.198,-20.817 -23.964,-20.817 -17.348,0 -29.774,11.457 -29.774,27.918 0,12.264 9.198,20.818 23.884,20.818zm1.371 -12.427c-5.971,0 -9.602,-3.711 -9.602,-9.279 0,-7.827 4.761,-14.605 12.83,-14.605 6.051,0 9.521,3.793 9.521,9.36 0,7.747 -4.599,14.524 -12.749,14.524zm83.836 -35.26l-20.011 25.094 -10.49 -25.094 -12.748 0 -9.28 46.638 14.282 0 4.277 -21.222 7.504 16.945 6.858 0 13.879 -17.832 -4.438 22.109 14.282 0 9.279 -46.638 -13.394 0z"
    r="128.023"
    viewBox="0 0 539 358.186"
    x1="181.856"
    x2="362.907"
    y1="219.487"
    y2="38.436"
  />
);

export const SimpleLogo: FC = () => (
  <LogoSVG
    cx="128"
    cy="128"
    d="M129.883 43.554l35.158 20.3 0.181 0.112 34.858 20.125c0.786,0.373 1.435,1.037 1.769,1.915 0.156,0.409 0.23,0.83 0.229,1.244l0.004 0 0 81.501c0,1.414 -0.839,2.632 -2.046,3.184l-34.998 20.206 0.003 0.006 -35.083 20.256c-0.559,0.378 -1.233,0.598 -1.958,0.598 -0.726,0 -1.399,-0.22 -1.958,-0.598l-35.084 -20.256 -0.181 -0.113 -34.845 -20.117c-1.1,-0.517 -1.899,-1.594 -2.001,-2.893 -0.007,-0.092 -0.01,-0.183 -0.01,-0.273l-0.003 -81.501c0,-1.414 0.839,-2.632 2.046,-3.185l34.998 -20.205 -0.004 -0.006 35.147 -20.293c1.128,-0.727 2.609,-0.756 3.778,-0.007zm31.658 26.342l-19.582 -11.306 28.128 35.756 20.387 -7.753 -28.737 -16.591 -0.196 -0.106zm33.541 58.104l0 -35.678 -21.531 8.188 21.531 50.99 0 -23.5zm-33.527 58.104l25.567 -14.761 -55.622 -4.444 0 36.55 30.041 -17.345 0.004 0.006 0.01 -0.006zm-67.097 0l30.042 17.345 0 -36.55 -55.622 4.444 25.384 14.656 0.196 0.105zm-33.54 -58.104l0 23.5 21.53 -50.99 -21.53 -8.188 0 35.678zm33.527 -58.104l-28.92 16.697 20.387 7.753 28.128 -35.756 -19.582 11.306 -0.003 -0.006 -0.01 0.006zm27.498 90.191l-34.257 -54.055 -24.819 58.775 59.076 -4.72zm-28.515 -58.059l34.572 54.55 34.571 -54.55 -69.143 0zm34.572 -49.876l-33.729 42.876 67.458 0 -33.729 -42.876zm65.132 112.655l-24.818 -58.775 -34.257 54.055 59.075 4.72z"
    r="128"
    viewBox="0 0 256 256.001"
    x1="37.49"
    x2="218.509"
    y1="218.51"
    y2="37.491"
  />
);
