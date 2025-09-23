import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/question-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionRepository = {
  create: async (question: Question) => {},
}

describe('Create Question Test', () => {
  it('should create an question', async () => {
    const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

    const { question } = await createQuestion.execute({
      authorId: '1',
      title: 'Question Test',
      content: 'A new question to test application use case',
    })

    expect(question.content).toBeTruthy()
  })
})
