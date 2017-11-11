const Unit = mrequire("core:Test.Unit:1.0.0");


Unit.Suite("All")([
    require("./test/LexerTest")
])
    .then(Unit.showDetail)
    .then(Unit.showSummary)
    .then(Unit.setExitCodeOnFailures);
