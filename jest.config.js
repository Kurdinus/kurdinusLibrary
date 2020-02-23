module.exports = {
    "moduleFileExtensions": ['js', 'json'],
    "moduleNameMapper": {
        '^@/(.*)$': '<rootDir>/$1'
    },
    "roots": ["./tests/"],
    "transformIgnorePatterns": ['<rootDir>/node_modules/'],
    "transform": {
        "^.+\\.[t|j]s?$": "babel-jest"
    },
}