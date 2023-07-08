"use strict";

function getArrayParams(...arr) {
	if (arr.length < 1) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;
	let avg = 0;
	let sum = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	avg = +(sum / arr.length).toFixed(2);

	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;
	if (arr.length > 0) {
		min = arr[0];
		max = arr[0];
	} else {
		min = 0;
		max = 0;
	}
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}
	let sumEven = 0;
	let sumOdd = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			sumEven += arr[i];
		} else {
			sumOdd += arr[i];
		}
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let newArr = [];
	for (let i = 0; i <= arrOfArr.length - 1; i++) {
		newArr.push(func(...arrOfArr[i]));
	}
	for (let j = 0; j <= newArr.length - 1; j++) {
		if (maxWorkerResult < newArr[j]) {
			maxWorkerResult = newArr[j];
		}
	}
	return maxWorkerResult;
}
