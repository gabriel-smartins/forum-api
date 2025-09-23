import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  it('should create an question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Question Test',
      content: 'A new question to test application use case',
    })

    expect(question.id).toBeTruthy()
  })
})
