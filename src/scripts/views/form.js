import React from 'react';
import {Button, Input} from '@0bie/pattern-lib-react';

export default function Form ({
  inputValue,
  handleChange,
  handleSubmit
}) {
  return (
    <div className="p--md">
      <h3 className="mb--xs">
        <a className="mr--xxs" href="http://bitly.com/2G9bvTj">
          GitHub API v4
        </a>
        <span>Client</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb--md">
          <label htmlFor="url">
            Show open issues for https://github.com/
          </label>
          <Input
            size="xs"
            id="url"
            inputClassNames={['pl--xs']}
            classNames={['input--full']}
            value={inputValue}
            onChange={handleChange}
            placeholder="organization/repository"
          />
        </div>
        <Button
          size="xs"
          type="submit"
          label="Search"
          classNames={['btn--full', 'btn--primary', 'btn--hover']}
        />
      </form>
    </div>
  )
}
