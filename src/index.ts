
import { MatchReader} from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./analyzers/WInsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";



// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')

// // Create an instance of MatchReader and pass in something satisfying
// // the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load()

const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)
