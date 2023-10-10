interface QuestionItem {
	id: string;
	question: string;
	answer: string;
	category: number;
	difficulty: number;
}

interface Categories {
	[key: number]: string;
}
