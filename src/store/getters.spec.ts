import getters from "@/store/getters";

describe("Given a getters object", () => {
  describe("When it is called", () => {
    test("Then it should return an object", () => {
      expect(getters).toEqual({});
    });
  });
});
