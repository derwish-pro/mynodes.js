module.exports.message_type =
{
	C_PRESENTATION: 0,
	C_SET: 1,
	C_REQ: 2,
	C_INTERNAL: 3,
	C_STREAM: 4
};

module.exports.message_type_key = [
	"C_PRESENTATION",
	"C_SET",
	"C_REQ",
	"C_INTERNAL",
	"C_STREAM"
];


module.exports.seq_req = {
	V_TEMP: 0,
	V_HUM: 1,
	V_LIGHT: 2,
	V_DIMMER: 3,
	V_PRESSURE: 4,
	V_FORECAST: 5,
	V_RAIN: 6,
	V_RAINRATE: 7,
	V_WIND: 8,
	V_GUST: 9,
	V_DIRECTION: 10,
	V_UV: 11,
	V_WEIGHT: 12,
	V_DISTANCE: 13,
	V_IMPEDANCE: 14,
	V_ARMED: 15,
	V_TRIPPED: 16,
	V_WATT: 17,
	V_KWH: 18,
	V_SCENE_ON: 19,
	V_SCENE_OFF: 20,
	V_HEATER: 21,
	V_HEATER_SW: 22,
	V_LIGHT_LEVEL: 23,
	V_VAR1: 24,
	V_VAR2: 25,
	V_VAR3: 26,
	V_VAR4: 27,
	V_VAR5: 28,
	V_UP: 29,
	V_DOWN: 30,
	V_STOP: 31,
	V_IR_SEND: 32,
	V_IR_RECEIVE: 33,
	V_FLOW: 34,
	V_VOLUME: 35,
	V_LOCK_STATUS: 36,
	V_LEVEL: 37,
	V_VOLTAGE: 38,
	V_CURRENT: 39,
	V_RGB: 40,
	V_RGBW: 41,
	V_ID: 42,
	V_UNIT_PREFIX: 43,
	V_HVAC_SETPOINT_COOL: 44,
	V_HVAC_SETPOINT_HEAT: 45,
	V_HVAC_FLOW_MOD: 46
};

module.exports.seq_req_key = [
	"V_TEMP",
	"V_HUM",
	"V_STATUS",
	"V_PERCENTAGE",
	"V_PRESSURE",
	"V_FORECAST",
	"V_RAIN",
	"V_RAINRATE",
	"V_WIND",
	"V_GUST",
	"V_DIRECTION",
	"V_UV",
	"V_WEIGHT",
	"V_DISTANCE",
	"V_IMPEDANCE",
	"V_ARMED",
	"V_TRIPPED",
	"V_WATT",
	"V_KWH",
	"V_SCENE_ON",
	"V_SCENE_OFF",
	"V_HVAC_FLOW_STATE",
	"V_HVAC_SPEED",
	"V_LIGHT_LEVEL",
	"V_VAR1",
	"V_VAR2",
	"V_VAR3",
	"V_VAR4",
	"V_VAR5",
	"V_UP",
	"V_DOWN",
	"V_STOP",
	"V_IR_SEND",
	"V_IR_RECEIVE",
	"V_FLOW",
	"V_VOLUME",
	"V_LOCK_STATUS",
	"V_LEVEL",
	"V_VOLTAGE",
	"V_CURRENT",
	"V_RGB",
	"V_RGBW",
	"V_ID",
	"V_UNIT_PREFIX",
	"V_HVAC_SETPOINT_COOL",
	"V_HVAC_SETPOINT_HEAT",
	"V_HVAC_FLOW_MODE"
];


module.exports.internal = {
	I_BATTERY_LEVEL: 0,
	I_TIME: 1,
	I_VERSION: 2,
	I_ID_REQUEST: 3,
	I_ID_RESPONSE: 4,
	I_INCLUSION_MODE: 5,
	I_CONFIG: 6,
	I_PING: 7,
	I_PING_ACK: 8,
	I_LOG_MESSAGE: 9,
	I_CHILDREN: 10,
	I_SKETCH_NAME: 11,
	I_SKETCH_VERSION: 12,
	I_REBOOT: 13,
	I_GATEWAY_READY: 14,
	I_REQUEST_SIGNING: 15,
	I_GET_NONCE: 16,
	I_GET_NONCE_RESPONSE: 17
};

module.exports.internal_key = ["I_BATTERY_LEVEL", "I_TIME", "I_VERSION", "I_ID_REQUEST", "I_ID_RESPONSE", "I_INCLUSION_MODE", "I_CONFIG", "I_FIND_PARENT", "I_FIND_PARENT_RESPONSE", "I_LOG_MESSAGE", "I_CHILDREN", "I_SKETCH_NAME", "I_SKETCH_VERSION", "I_REBOOT", "I_GATEWAY_READY", "I_REQUEST_SIGNING", "I_GET_NONCE", "I_GET_NONCE_RESPONSE"];

module.exports.presentation = {
	S_DOOR: 0,
	S_MOTION: 1,
	S_SMOKE: 2,
	S_LIGHT: 3,
	S_DIMMER: 4,
	S_COVER: 5,
	S_TEMP: 6,
	S_HUM: 7,
	S_BARO: 8,
	S_WIND: 9,
	S_RAIN: 10,
	S_UV: 11,
	S_WEIGHT: 12,
	S_POWER: 13,
	S_HEATER: 14,
	S_DISTANCE: 15,
	S_LIGHT_LEVEL: 16,
	S_ARDUINO_NODE: 17,
	S_ARDUINO_REPEATER_NODE: 18,
	S_LOCK: 19,
	S_IR: 20,
	S_WATER: 21,
	S_AIR_QUALITY: 22,
	S_CUSTOM: 23,
	S_DUST: 24,
	S_SCENE_CONTROLLER: 25,
	S_RGB_LIGHT: 26,
	S_RGBW_LIGHT: 27,
	S_COLOR_SENSOR: 28,
	S_HVAC: 29,
	S_MULTIMETER: 30,
	S_SPRINKLER: 31,
	S_WATER_LEAK: 32,
	S_SOUND: 33,
	S_VIBRATION: 34,
	S_MOISTUR: 35
};

module.exports.presentation_key = [
	"S_DOOR",
	"S_MOTION",
	"S_SMOKE",
	"S_LIGHT",
	"S_BINARY",
	"S_DIMMER",
	"S_COVER",
	"S_TEMP",
	"S_HUM",
	"S_BARO",
	"S_WIND",
	"S_RAIN",
	"S_UV",
	"S_WEIGHT",
	"S_POWER",
	"S_HEATER",
	"S_DISTANCE",
	"S_LIGHT_LEVEL",
	"S_ARDUINO_NODE",
	"S_ARDUINO_REPEATER_NODE",
	"S_LOCK",
	"S_IR",
	"S_WATER",
	"S_AIR_QUALITY",
	"S_CUSTOM",
	"S_DUST",
	"S_SCENE_CONTROLLER",
	"S_RGB_LIGHT",
	"S_RGBW_LIGHT",
	"S_COLOR_SENSOR",
	"S_HVAC",
	"S_MULTIMETER",
	"S_SPRINKLER",
	"S_WATER_LEAK",
	"S_SOUND",
	"S_VIBRATION",
	"S_MOISTURE"
];

module.exports.stream = {
	ST_FIRMWARE_CONFIG_REQUEST: 0,
	ST_FIRMWARE_CONFIG_RESPONSE: 1,
	ST_FIRMWARE_REQUEST: 2,
	ST_FIRMWARE_RESPONSE: 3,
	ST_SOUND: 4,
	ST_IMAGE: 5
};

module.exports.stream_key = [
	"ST_FIRMWARE_CONFIG_REQUEST",
	"ST_FIRMWARE_CONFIG_RESPONSE",
	"ST_FIRMWARE_REQUEST",
	"ST_FIRMWARE_RESPONSE",
	"ST_SOUND",
	"ST_IMAGE"
];