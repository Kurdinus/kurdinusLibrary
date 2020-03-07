module.exports = {
    "moduleFileExtensions": ['js', 'json'],
    "moduleNameMapper": {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    "roots": ["./test/"],
    "transformIgnorePatterns": ['<rootDir>/node_modules/'],
    "transform": {
        "^.+\\.[t|j]s?$": "babel-jest"
    },
}
