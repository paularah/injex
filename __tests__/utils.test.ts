import { toCamelCase, getAllFilesInDir, isFunction, isDirExists } from "../src/utils/utils";
import * as path from "path";

describe("Utils", () => {

	describe("toCamelCase", () => {
		it("should convert string to camel case", () => {
			expect(toCamelCase("MyClass")).toBe("myClass");
			expect(toCamelCase("Hello World")).toBe("hello World");
			expect(toCamelCase("myService")).toBe("myService");
		});
	});

	describe("isFunction", () => {
		it("should return true if function is passed", () => {
			expect(isFunction(() => { })).toBe(true);
			expect(isFunction(function () { })).toBe(true);
		});

		it("should return false if value is not a function", () => {
			expect(isFunction(false)).toBe(false);
			expect(isFunction("string")).toBe(false);
			expect(isFunction(42)).toBe(false);
		});
	});

	describe("getAllFilesInDir", () => {
		it("should get all files in folder", () => {

			const files = getAllFilesInDir(
				path.resolve(__dirname, "../.github/ISSUE_TEMPLATE"), "/**/*.md"
			);

			expect(files.length).toBe(2);
		});
	});

	describe("isDirExists", () => {
		it("should return true if a directory exists", () => {
			expect(
				isDirExists(path.resolve(__dirname, "./__mocks__"))
			).toBe(true);
		});

		it("should return false if a directory NOT exists", () => {
			expect(
				isDirExists("./some_fake_path")
			).toBe(false);
		})
	});
});