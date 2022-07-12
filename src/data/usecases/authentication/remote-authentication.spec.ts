class RemoteAuthentication {
  constructor(private readonly url: string) {

  }

  async auth(): Promise<void>{
    return Promise.resolve()
  }
}

describe('RemoteAuthentication', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpClient = HttpClient()
      const sut = new RemoteAuthentication(url)
      await sut.auth()
      expect(httpClient.url).toBe(url)
  })
}) 
