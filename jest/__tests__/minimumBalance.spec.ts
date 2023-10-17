import "jest";
import { expect } from "@jest/globals";
import { Keypair } from "stellar-sdk";
import { minimumBalance } from "../../src/actions";
import fetchMock from "jest-fetch-mock";

jest.mock("node-fetch", () => jest.fn());

describe("MinimumBalance function", () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });
  afterAll(() => {
    fetchMock.disableMocks();
  });

  it("Should call the function minimumBalance and fund the publickey with lummens", async () => {
    const consoleLog = jest.spyOn(console, "log");
    const realPair = Keypair.random();
    const publicKey = realPair.publicKey();

    // Configura la respuesta simulada de fetch usando fetchMock
    fetchMock.mockResponse(
      JSON.stringify({
        status: 200,
        json: async () => ({
          max_fee: "1000000",
          operation_count: 1,
          envelope_xdr:
            "AAAAAgAAAAAxkKMotWDOsB2Zp37VSud2unPxDsaUohjne0rUNM6U0wAPQkAADZXdAAAA/QAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAAAAAAAAADX+Cm3KfwZkNUc7QfkmtjXhjt+I0CsLgAxbbA6mko8MAAAABdIdugAAAAAAAAAAAI0zpTTAAAAQDubeCP0RTCl9n4wPJWNzIk7h9HTNB7FQ1rMOUdLJIKvlBLYYZyJdJGtFag5uilF4h2+uQ40Es+rmov/FCCTtweGVuCcAAAAQG9GM8rz7qQ6nEL1ux1RA8i5huQdPXN3Mz/NTzVUEXgAfK9l4LZHu/r57hZ565usf2M+AM5hKTYyg4D6GZPTkwg=",
          result_xdr: "AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA=",
          result_meta_xdr:
            "AAAAAwAAAAAAAAACAAAAAwAfdTUAAAAAAAAAADGQoyi1YM6wHZmnftVK53a6c/EOxpSiGOd7StQ0zpTTAAAAADljxDAADZXdAAAA/AAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAMAAAAAAB9t2wAAAABlLrtyAAAAAAAAAAEAH3U1AAAAAAAAAAAxkKMotWDOsB2Zp37VSud2unPxDsaUohjne0rUNM6U0wAAAAA5Y8QwAA2V3QAAAP0AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAAfdTUAAAAAZS7iDgAAAAAAAAABAAAAAwAAAAMAH3UqAAAAAAAAAAAQfdFrLDgzSIIugR73qs8U0ZiKbwBUclTTPh5thlbgnAAu8Oiv144UAAABVgAAAOgAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAANlgsAAAAAZNDm/gAAAAAAAAABAB91NQAAAAAAAAAAEH3Rayw4M0iCLoEe96rPFNGYim8AVHJU0z4ebYZW4JwALvDRZ2CmFAAAAVYAAADoAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAADZYLAAAAAGTQ5v4AAAAAAAAAAAAfdTUAAAAAAAAAANf4Kbcp/BmQ1RztB+Sa2NeGO34jQKwuADFtsDqaSjwwAAAAF0h26AAAH3U1AAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
          fee_meta_xdr:
            "AAAAAgAAAAMAH23bAAAAAAAAAAAxkKMotWDOsB2Zp37VSud2unPxDsaUohjne0rUNM6U0wAAAAA5Y8SUAA2V3QAAAPwAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAAfbdsAAAAAZS67cgAAAAAAAAABAB91NQAAAAAAAAAAMZCjKLVgzrAdmad+1Urndrpz8Q7GlKIY53tK1DTOlNMAAAAAOWPEMAANld0AAAD8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAAH23bAAAAAGUuu3IAAAAA",
          memo_type: "none",
          signatures: [
            "O5t4I/RFMKX2fjA8lY3MiTuH0dM0HsVDWsw5R0skgq+UEthhnIl0ka0VqDm6KUXiHb65DjQSz6uai/8UIJO3Bw==",
            "b0YzyvPupDqcQvW7HVEDyLmG5B09c3czP81PNVQReAB8r2Xgtke7+vnuFnnrm6x/Yz4AzmEpNjKDgPoZk9OTCA==",
          ],
          valid_after: "1970-01-01T00:00:00Z",
        }),
      })
    );
    await minimumBalance(publicKey);
    expect(consoleLog).toHaveBeenCalledWith(
      "SUCCESS! You have a new account :)\n",
      expect.objectContaining({ status: 200 })
    );
  });

  it("Should log an error message when publicKey is null or empty", async () => {
    const consoleError = jest.spyOn(console, "error");
    const publicKey = null; // Set the publicKey to null or an empty string
    await minimumBalance(publicKey);
    expect(consoleError).toHaveBeenCalledWith("ERROR!", expect.any(Error));
  });
});
