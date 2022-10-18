let model = null;

export async function getModel() {
  if (model) {
    return model;
  }

  const factory = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: 'tfjs',
    solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
    modelType: 'full',
    maxHands: 10,
  };
  model = await handPoseDetection.createDetector(factory, detectorConfig);
  return model;
}

export async function getPredictions(video, model) {
  const estimationConfig = { flipHorizontal: false };
  const hands = await model.estimateHands(video, estimationConfig);
  return hands;
}
