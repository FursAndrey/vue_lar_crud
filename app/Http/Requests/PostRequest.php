<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'title'=>[
                'Required',
                'String'
            ],
            'author'=>[
                'Required',
                'String'
            ],
            'body'=>[
                'Required',
                'String'
            ]
        ];
        
        if (!empty($this->post)) {
            $rules['title'][] = Rule::unique('posts')->ignore($this->post->title);
        } else {
            $rules['title'][] = Rule::unique('posts');
        }

        return $rules;
        
    }
}
