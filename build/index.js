"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from "./CsvFileReader";
const Summary_1 = require("./Summary");
// import { WinsAnalysis } from "./analyzers/WInsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')
// // Create an instance of MatchReader and pass in something satisfying
// // the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
